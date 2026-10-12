"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MenuSection from "@/components/menu/MenuSection";
import CategoryBar from "@/components/menu/CategoryBar";
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
