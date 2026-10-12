"use client";
import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { isAdminUser } from "@/lib/admin";
import { products as existingProducts } from "@/data/products";
import type { Product } from "@/types/product";

type FormData = {
  name: string;
  section: string;
  description: string;
  image: string;
  price: string;
  sizes: string;
};

const emptyForm: FormData = {
  name: "",
  section: "",
  description: "",
  image: "",
  price: "",
  sizes: "",
};

function toFormData(product: Product): FormData {
  return {
    name: product.name,
    section: product.section,
    description: product.description ?? "",
    image: product.image,
    price: product.price != null ? String(product.price) : "",
    sizes: product.sizes
      ?.map((size) => `${size.name}: ${size.price}`)
      .join("\n") ?? "",
  };
}

function makeProductId(name: string) {
  return (
    name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "product"
  );
}

export default function AdminPage() {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function loadProducts() {
    setLoadingProducts(true);

    try {
      const snapshot = await getDocs(collection(db, "products"));
      const items = snapshot.docs.map(
        (item) =>
          ({ id: item.id, ...item.data() }) as Product
      );

      items.sort((a, b) => a.name.localeCompare(b.name));
      setProducts(items);
    } catch {
      setError("Couldn't load products. Check your Firestore rules.");
    } finally {
      setLoadingProducts(false);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || !isAdminUser(user.uid)) {
        router.replace("/admin/login");
        return;
      }

      setChecking(false);
      void loadProducts();
    });

    return () => unsubscribe();
  }, [router]);

  function startAdd() {
    setEditingProduct(null);
    setForm(emptyForm);
    setError("");
    setMessage("");
    setShowForm(true);
  }

    function startEdit(product: Product) {
    setEditingProduct(product);
    setForm(toFormData(product));
    setError("");
    setMessage("");
    setShowForm(true);
    }

  function closeForm() {
    setShowForm(false);
    setEditingProduct(null);
    setForm(emptyForm);
    setError("");
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

        async function handleImageUpload(
        e: React.ChangeEvent<HTMLInputElement>
        ) {
        const file = e.target.files?.[0];

        if (!file) return;

        setError("");
        setMessage("");

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/avif",
        ];

        if (!allowedTypes.includes(file.type)) {
            setError("Choose a JPG, PNG, WebP, or AVIF image.");
            e.target.value = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("Image must be 5 MB or smaller.");
            e.target.value = "";
            return;
        }

        setUploadingImage(true);

        try {
            const user = auth.currentUser;

            if (!user) {
            throw new Error("Please sign in again.");
            }

            const token = await user.getIdToken();
            const body = new FormData();

            body.append("file", file);

            const response = await fetch("/api/upload", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body,
            });

            const result = await response.json();

            if (!response.ok) {
            throw new Error(result.error || "Image upload failed.");
            }

            if (!result.url) {
            throw new Error("Cloudinary did not return an image URL.");
            }

            updateField("image", result.url);
            setMessage("Image uploaded! Save the product to keep the image URL.");
        } catch (err) {
            setError(
            err instanceof Error
                ? err.message
                : "Image upload failed. Please try again."
            );
        } finally {
            setUploadingImage(false);
            e.target.value = "";
        }
        }


  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");

    const name = form.name.trim();
    const section = form.section.trim();
    const image = form.image.trim();

    if (!name || !section || !image) {
      setError("Name, category, and image path are required.");
      return;
    }

    const sizes = form.sizes
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separator = line.lastIndexOf(":");

        if (separator < 1) {
          return null;
        }

        const sizeName = line.slice(0, separator).trim();
        const priceText = line.slice(separator + 1).trim();
        const price = Number(priceText);

        if (!sizeName || priceText === "" || !Number.isFinite(price) || price < 0) {
          return null;
        }

        return { name: sizeName, price };
      });

    if (sizes.some((size) => size === null)) {
      setError('Enter each size on a new line, like "Regular: 500".');
      return;
    }

    const priceText = form.price.trim();
    const price = priceText === "" ? undefined : Number(priceText);

    if (
      sizes.length === 0 &&
      (price === undefined || !Number.isFinite(price) || price < 0)
    ) {
      setError("Enter a valid price, or add sizes with their prices.");
      return;
    }

    if (priceText !== "" && (!Number.isFinite(price) || price! < 0)) {
      setError("Enter a valid price.");
      return;
    }

    setSaving(true);

    try {
      let id = editingProduct?.id;

      if (!id) {
        const baseId = makeProductId(name);
        id = baseId;
        let suffix = 2;

        while (products.some((product) => product.id === id)) {
          id = `${baseId}-${suffix}`;
          suffix += 1;
        }
      }

      const productData: Omit<Product, "id"> = {
        name,
        section,
        image,
        ...(form.description.trim()
          ? { description: form.description.trim() }
          : {}),
        ...(sizes.length > 0
          ? { sizes: sizes as { name: string; price: number }[] }
          : {}),
        ...(sizes.length === 0 && price !== undefined
          ? { price }
          : {}),
      };

      await setDoc(doc(db, "products", id), productData);

      await loadProducts();
      setShowForm(false);
      setEditingProduct(null);
      setForm(emptyForm);
      setMessage(
        editingProduct
          ? "Product updated successfully."
          : "Product added successfully."
      );
    } catch (err) {
      console.error("Saving product failed:", err);
      setError("Couldn't save the product. Check your connection and Firestore rules.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(product: Product) {
    const confirmed = window.confirm(
      `Delete "${product.name}" from the Firebase menu?`
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      await deleteDoc(doc(db, "products", product.id));
      setProducts((current) =>
        current.filter((item) => item.id !== product.id)
      );
      setMessage(`"${product.name}" deleted from Firebase.`);
    } catch {
      setError("Couldn't delete this product.");
    }
  }

  async function handleSignOut() {
    await signOut(auth);
    router.replace("/admin/login");
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F3EC]">
        Checking admin access...
      </main>
    );
  }

  const categories = Array.from(
    new Set([
      ...existingProducts.map((product) => product.section),
      ...products.map((product) => product.section),
    ])
  ).sort((a, b) => a.localeCompare(b));

  return (
    <main className="min-h-screen bg-[#F7F3EC] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4 border-b border-[#D8CFC3] pb-6">
          <div>
            <h1 className="font-playfair-display text-3xl font-semibold text-[#29241F]">
              Café Copenhagen
            </h1>
            <p className="mt-1 text-sm text-[#7A746C]">
              Menu management
            </p>
          </div>

          <button
            onClick={handleSignOut}
            className="rounded-lg border border-[#D8CFC3] px-4 py-2 text-sm text-[#29241F] hover:bg-white"
          >
            Sign out
          </button>
        </header>

        <section className="py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-playfair-display text-2xl font-semibold text-[#29241F]">
                Products
              </h2>
              <p className="mt-2 text-sm text-[#7A746C]">
                {products.length} products.
              </p>
            </div>

            <button
              onClick={startAdd}
              className="rounded-lg bg-[#29241F] px-5 py-3 text-sm font-medium text-white hover:bg-[#45392D]"
            >
              + Add product
            </button>
          </div>

          {message && (
            <p role="status" className="mt-4 text-sm text-green-700">
              {message}
            </p>
          )}

          {error && (
            <p role="alert" className="mt-4 text-sm text-red-700">
              {error}
            </p>
          )}

          {showForm && (
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-3 sm:p-6"
                onMouseDown={(e) => {
                if (e.target === e.currentTarget && !saving) {
                    closeForm();
                }
                }}
            >
                <form
                onSubmit={handleSave}
                className="max-h-[90vh] w-full max-w-2xl space-y-4 overflow-y-auto rounded-2xl border border-[#E5DCCF] bg-[#FFFDF9] p-5 shadow-2xl sm:p-6"
                >

              <h3 className="font-playfair-display text-xl font-semibold text-[#29241F]">
                {editingProduct ? "Edit product" : "Add a product"}
              </h3>

              <div>
                <label className="mb-1 block text-sm text-[#29241F]">
                  Product name *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm"
                  placeholder="e.g. Cappuccino"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-[#29241F]">
                  Category *
                </label>
                <input
                  required
                  list="product-categories"
                  value={form.section}
                  onChange={(e) => updateField("section", e.target.value)}
                  className="w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm"
                  placeholder="Choose or type a category"
                />
                <datalist id="product-categories">
                  {categories.map((category) => (
                    <option key={category} value={category} />
                  ))}
                </datalist>
              </div>

              <div>
                <label className="mb-1 block text-sm text-[#29241F]">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  className="w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm"
                  placeholder="Describe the product"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-[#29241F]">
                  Image path or URL *
                </label>
                <input
                  required
                  value={form.image}
                  onChange={(e) => updateField("image", e.target.value)}
                  className="w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm"
                  placeholder="/images/example.webp"
                />

                            
            <div className="mt-3">
            <label className="mb-2 block text-sm text-[#29241F]">
                Or upload a product image
            </label>

            <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                onChange={handleImageUpload}
                disabled={uploadingImage || saving}
                className="block w-full text-sm text-[#5F5A53] file:mr-3 file:rounded-lg file:border-0 file:bg-[#29241F] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#45392D] disabled:opacity-60"
            />

            {uploadingImage && (
                <p className="mt-2 text-sm text-[#7A746C]">
                Uploading image...
                </p>
            )}

            {form.image.startsWith("https://") && (
                <p className="mt-2 break-all text-xs text-green-700">
                Image URL: {form.image}
                </p>
            )}
            </div>

                <p className="mt-1 text-xs text-[#7A746C]">
                  We'll add direct image uploads with Cloudinary next.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm text-[#29241F]">
                  Single price (Rs.)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={form.price}
                  onChange={(e) => updateField("price", e.target.value)}
                  className="w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm"
                  placeholder="e.g. 550"
                />
                <p className="mt-1 text-xs text-[#7A746C]">
                  Use this for products with one price. If the product has sizes,
                  enter them below instead.
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm text-[#29241F]">
                  Sizes and prices (optional)
                </label>
                <textarea
                  rows={3}
                  value={form.sizes}
                  onChange={(e) => updateField("sizes", e.target.value)}
                  className="w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm"
                  placeholder={"Small: 450\nLarge: 650"}
                />
                <p className="mt-1 text-xs text-[#7A746C]">
                  Enter one size per line in the format: Size: Price.
                  If sizes are entered, they will be saved instead of the single price.
                </p>
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-[#29241F] px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingProduct
                      ? "Save changes"
                      : "Add product"}
                </button>

                <button
                  type="button"
                  onClick={closeForm}
                  disabled={saving}
                  className="rounded-lg border border-[#D8CFC3] px-5 py-3 text-sm text-[#29241F]"
                >
                  Cancel
                </button>
                 </div>
    </form>
  </div>
)}

          {loadingProducts ? (
            <p className="mt-6 text-sm text-[#7A746C]">
              Loading products...
            </p>
          ) : products.length === 0 ? (
            <p className="mt-6 rounded-xl bg-white p-5 text-sm text-[#7A746C]">
              No products found in Firebase.
            </p>
          ) : (

<div className="mt-6 space-y-10">
  {Array.from(
    new Set([
      ...existingProducts.map((product) => product.section),
      ...products.map((product) => product.section),
    ])
  ).map((section) => {
    const sectionProducts = products.filter(
      (product) => product.section === section
    );

    if (sectionProducts.length === 0) return null;

    return (
      <section key={section} className="scroll-mt-6">
        <div className="mb-4 flex items-center justify-between border-b border-[#E5DCCF] pb-2">
          <h2 className="text-xl font-semibold text-[#29241F]">
            {section}
          </h2>

          <span className="text-xs uppercase tracking-wider text-[#7A746C]">
            {sectionProducts.length}{" "}
            {sectionProducts.length === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sectionProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border border-[#E5DCCF] bg-[#FFFDF9] shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F0E9DE]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>

              <div className="p-3">
                <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-[#29241F]">
                  {product.name}
                </h3>

                <p className="mt-1 line-clamp-1 text-xs text-[#7A746C]">
                  {product.section}
                </p>

                <p className="mt-2 min-h-5 text-sm font-medium text-[#9A7135]">
                  {product.sizes?.length
                    ? product.sizes
                        .map(
                          (size) =>
                            `${size.name}: Rs. ${size.price}`
                        )
                        .join(" · ")
                    : product.price != null
                      ? `Rs. ${product.price}`
                      : "No price set"}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => startEdit(product)}
                    className="rounded-lg border border-[#D8CFC3] px-2 py-2 text-sm text-[#29241F] transition hover:bg-[#F3EBDD]"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(product)}
                    className="rounded-lg border border-red-200 px-2 py-2 text-sm text-red-700 transition hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  })}
</div>

          )}
        </section>
      </div>
    </main>
  );
}