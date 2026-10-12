"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MenuSection from "@/components/menu/MenuSection";
import CategoryBar from "@/components/menu/CategoryBar";
import { products as localProducts } from "@/data/products";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Product } from "@/types/product";

const sections = [
  { id: "breakfast", title: "Breakfast" },
  { id: "starters", title: "Starters" },
  { id: "salads", title: "Salads" },
  { id: "main-course", title: "Main Course" },
  { id: "pizza", title: "Pizza" },
  { id: "burgers", title: "Burgers" },
  { id: "sandwiches", title: "Sandwiches" },
  { id: "pasta", title: "Pasta" },
  {
    id: "soft-drinks-cold-drinks",
    title: "Soft Drinks & Cold Drinks",
  },
  { id: "mocktails", title: "Mocktails" },
  { id: "shakes", title: "Shakes" },
  { id: "cold-coffees", title: "Cold Coffees" },
  { id: "hot-coffees-specials", title: "Hot Coffees & Specials" },
  { id: "hot-tea", title: "Hot Tea" },
  { id: "desserts", title: "Desserts" },
  { id: "cakes", title: "Cakes" },
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>(localProducts);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const snapshot = await getDocs(collection(db, "products"));

        const firebaseProducts = snapshot.docs.map(
          (item) =>
            ({
              id: item.id,
              ...item.data(),
            }) as Product
        );

        if (!cancelled && firebaseProducts.length > 0) {
          setProducts(firebaseProducts);
        }
      } catch (error) {
        console.error(
          "Couldn't load Firebase menu. Showing the local menu instead.",
          error
        );
      }
    }

    void loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <header className="sticky top-0 z-50 border-b border-[#8B5E34]/15 bg-[#FFFDF8]/85 shadow-[0_2px_12px_rgba(0,0,0,0.04)] backdrop-blur-[10px]">
        <div className="mx-auto flex h-[88px] max-w-5xl items-center justify-center px-4">
          <Image
            src="/images/logo.webp"
            alt="Cafe Copenhagen"
            width={80}
            height={80}
            className="h-[72px] w-[72px] object-contain"
            priority
          />
        </div>
      </header>

      <CategoryBar sections={sections} />

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
                  section.id === "breakfast"
                    ? "08:00 AM – 12:00 PM"
                    : undefined
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