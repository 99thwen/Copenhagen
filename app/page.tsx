import Image from "next/image";
import MenuSection from "@/components/menu/MenuSection";
import { products } from "@/data/products";
const sections = [
   {
    id: "breakfast",
    title: "Breakfast",
  },

  {
    id: "starters",
    title: "Starters",
  },
  {
    id: "salads",
    title: "Salads",
  },
  {
    id: "main-course",
    title: "Main Course",
  },
  {
    id: "pizza",
    title: "Pizza",
  },
  {
    id: "burgers",
    title: "Burgers",
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
  },
  {
    id: "pasta",
    title: "Pasta",
  },
   
  {
    id: "soft-drinks-cold-drinks",
    title: "Soft Drinks & Cold Drinks",
  },
  {
    id: "mocktails",
    title: "Mocktails",
  },
  {
    id: "shakes",
    title: "Shakes",
  },
  {
    id: "cold-coffees",
    title: "Cold Coffees",
  },
  {
    id: "hot-coffees-specials",
    title: "Hot Coffees & Specials",
  },
  {
    id: "hot-tea",
    title: "Hot Tea",
  },
  {
    id: "desserts",
    title: "Desserts",
  },
{
  id: "cakes",
  title: "Cakes",
},

];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/95 backdrop-blur-xl">
          <div className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Cafe Copenhagen"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />
          </div>
      </header>

      {/* Menu */}
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-7">
        <div className="space-y-12">
          {sections.map((section) => {
            const sectionProducts = products.filter(
              (product) => product.section === section.title
            );

            return (
              <MenuSection
                key={section.id}
                id={section.id}
                title={section.title}
                products={sectionProducts}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}