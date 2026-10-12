import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ADMIN_UID = "1va1Xyc8q3QLdy5cGkXUqrIoqH83";

export async function POST(request: Request) {
  try {
    const authorization = request.headers.get("authorization");
    const token = authorization?.startsWith("Bearer ")
      ? authorization.slice(7)
      : "";

    if (!token) {
      return NextResponse.json(
        { error: "Authentication required." },
        { status: 401 }
      );
    }

    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Firebase configuration is missing." },
        { status: 500 }
      );
    }

    const verification = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token }),
        cache: "no-store",
      }
    );

    if (!verification.ok) {
      return NextResponse.json(
        { error: "Invalid or expired login. Please sign in again." },
        { status: 401 }
      );
    }

    const identity = await verification.json();
    const user = identity.users?.[0];

    if (!user || user.localId !== ADMIN_UID) {
      return NextResponse.json(
        { error: "You are not authorized to upload images." },
        { status: 403 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Please select an image." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/avif",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Use a JPG, PNG, WebP, or AVIF image." },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Image must be 5 MB or smaller." },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await file.arrayBuffer());

    const result = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "cafe-copenhagen/products",
            resource_type: "image",
          },
          (error, uploadResult) => {
            if (error || !uploadResult) {
              reject(error ?? new Error("Image upload failed."));
              return;
            }

            resolve({ secure_url: uploadResult.secure_url });
          }
        );

        stream.end(bytes);
      }
    );

    return NextResponse.json({ url: result.secure_url });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);

    return NextResponse.json(
      { error: "Image upload failed. Please try again." },
      { status: 500 }
    );
  }
}