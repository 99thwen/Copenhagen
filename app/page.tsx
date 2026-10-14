"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MenuSection from "@/components/menu/MenuSection";
import CategoryBar from "@/components/menu/CategoryBar";
import Link from "next/link";
import { products as localProducts } from "@/data/products";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Product } from "@/types/product";
import type { MenuCategory } from "@/types/category";

const fallbackCategories: MenuCategory[] = [
  { id: "breakfast", title: "Breakfast", order: 1, subtitle: "08:00 AM – 12:00 PM" },
  { id: "starters", title: "Starters", order: 2 },
  { id: "salads", title: "Salads", order: 3 },
  { id: "main-course", title: "Main Course", order: 4 },
  { id: "pizza", title: "Pizza", order: 5 },
  { id: "burgers", title: "Burgers", order: 6 },
  { id: "sandwiches", title: "Sandwiches", order: 7 },
  { id: "pasta", title: "Pasta", order: 8 },
  { id: "soft-drinks-cold-drinks", title: "Soft Drinks & Cold Drinks", order: 9 },
  { id: "mocktails", title: "Mocktails", order: 10 },
  { id: "shakes", title: "Shakes", order: 11 },
  { id: "cold-coffees", title: "Cold Coffees", order: 12 },
  { id: "hot-coffees-specials", title: "Hot Coffees & Specials", order: 13 },
  { id: "hot-tea", title: "Hot Tea", order: 14 },
  { id: "desserts", title: "Desserts", order: 15 },
  { id: "cakes", title: "Cakes", order: 16 },
];

export default function Home() {

  const [products, setProducts] = useState<Product[]>(localProducts);
  const [sections, setSections] = useState<MenuCategory[]>(fallbackCategories);

  useEffect(() => {
    let cancelled = false;

    async function loadMenu() {
      try {
        const [productSnapshot, categorySnapshot] = await Promise.all([
          getDocs(collection(db, "products")),
          getDocs(
            query(collection(db, "categories"), orderBy("order", "asc"))
          ),
        ]);

        const firebaseProducts = productSnapshot.docs.map(
          (item) =>
            ({
              id: item.id,
              ...item.data(),
            }) as Product
        );

        const firebaseCategories = categorySnapshot.docs.map(
          (item) => item.data() as MenuCategory
        );

        if (cancelled) return;

        if (firebaseProducts.length > 0) {
          setProducts(firebaseProducts);
        }

        if (firebaseCategories.length > 0) {
          setSections(
            firebaseCategories
              .filter((category) => category.id && category.title)
              .sort((a, b) => a.order - b.order)
          );
        }
      } catch (error) {
        console.error(
          "Couldn't load the Firebase menu. Showing the local menu instead.",
          error
        );
      }
    }

    void loadMenu();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      
<header className="sticky top-0 z-50 border-b border-[#8B5E34]/15 bg-[#FFFDF8]/85 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-[10px]">
  <div className="relative mx-auto flex h-[88px] max-w-5xl items-center justify-between px-4">

  
{/* Social icons — left */}
<div className="flex items-center gap-3">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/cafecopenhagen1/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-[#6F6254] transition hover:text-[#9A7135]"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  </a>

  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@cafe.copenhagen/video/7651109775106673927?is_from_webapp=1&sender_device=pc"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    className="text-[#6F6254] transition hover:text-[#9A7135]"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M19.6 6.4a5.7 5.7 0 0 1-3.5-3.8V2h-4.2v13.5a2.8 2.8 0 1 1-2.8-2.8c.4 0 .8.1 1.1.2V8.6a7 7 0 1 0 5.9 6.9V9a9.8 9.8 0 0 0 5.1 1.4V6.3c-.5.1-1.1.1-1.6.1Z" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/923139810579"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="text-[#6F6254] transition hover:text-[#25D366]"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 7.8c-.3 0-.6.2-.8.5-.4.5-.9 1.2-.9 2.1 0 1 .7 2.2 1.6 3.2 1.1 1.4 2.6 2.5 4.4 3.1 1 .3 1.8.2 2.5-.2.5-.3.9-.9 1-1.4l-.1-.5-2.1-1-.5-.1-.4.5-.7.8c-.2.1-.4.1-.6 0-.9-.4-1.7-1-2.3-1.7-.2-.2-.4-.5-.5-.7-.1-.2 0-.4.1-.5l.5-.6c.2-.2.2-.4.1-.6l-.9-2.1c-.1-.3-.3-.5-.6-.5Z" />
    </svg>
  </a>
</div>

    {/* Centered logo */}
    <Link
      href="/"
      aria-label="Café Copenhagen home"
      className="absolute left-1/2 -translate-x-1/2"
    >
      <Image
        src="/images/logo.webp"
        alt="Cafe Copenhagen"
        width={80}
        height={80}
        className="h-[72px] w-[72px] object-contain"
        priority
      />
    </Link>

    {/* Navigation — right */}
    <nav className="flex items-center gap-2 text-[11px] text-[#6F6254] sm:gap-3 sm:text-sm">
      <Link href="/about" className="transition hover:text-[#9A7135]">
        About Us
      </Link>

      <span className="text-[#9A7135]/50">|</span>

      <Link href="/contact" className="transition hover:text-[#9A7135]">
        Contact Us
      </Link>
    </nav>

  </div>
</header>


      <CategoryBar
        sections={sections.map(({ id, title }) => ({ id, title }))}
      />

      <div className="mx-auto w-full max-w-7xl px-3 pb-12 pt-7 md:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section) => {
            const sectionProducts = products.filter(
              (product) => product.section === section.title
            );

            if (sectionProducts.length === 0) return null;

            return (
              <MenuSection
                key={section.id}
                id={section.id}
                title={section.title}
                products={sectionProducts}
                subtitle={
                  section.subtitle ??
                  (section.id === "breakfast"
                    ? "08:00 AM – 12:00 PM"
                    : undefined)
                }
              />
            );
          })}
        </div>
<div className="mt-8 pb-8 pt-2">
  <div className="mx-auto mb-4 h-px w-8 bg-[#9A7135]/30" />

  <p className="text-center font-dm-sans text-[10px] leading-4 text-[#81786E]">
    Tax will be added according to sales tax charges
  </p>


        </div>
      </div>
    </main>
  );
}
