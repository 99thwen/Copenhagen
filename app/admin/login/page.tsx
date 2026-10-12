
"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { isAdminUser } from "@/lib/admin";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!isAdminUser(credential.user.uid)) {
        await auth.signOut();
        setError("You are not authorized to access this dashboard.");
        return;
      }

      router.replace("/admin");
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F3EC] px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-2xl bg-[#FFFDF9] p-6 shadow-lg"
      >
        <h1 className="font-playfair-display text-3xl font-semibold text-[#29241F]">
          Café Copenhagen
        </h1>

        <p className="mb-6 mt-2 text-sm text-[#7A746C]">
          Admin dashboard
        </p>

        <label className="mb-1 block text-sm text-[#29241F]">
          Email
        </label>
        <input
          type="email"
          autoComplete="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm outline-none focus:border-[#9A7135]"
        />

        <label className="mb-1 block text-sm text-[#29241F]">
          Password
        </label>
        <input
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border border-[#D8CFC3] bg-white px-3 py-3 text-sm outline-none focus:border-[#9A7135]"
        />

        {error && (
          <p role="alert" className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#29241F] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#45392D] disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
