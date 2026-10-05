import { Product } from "@/types/product";
import ProductGrid from "./ProductGrid";

interface MenuSectionProps {
  title: string;
  products: Product[];
  id: string;
}

export default function MenuSection({
  title,
  products,
  id,
}: MenuSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <h2 className=" font-playfair-display text-[28px] font-semibold leading-none tracking-[-0.02em] text-[#29241F]">
            {title}
          </h2>

          <div className="mt-2 h-[2px] w-7 rounded-full bg-[#9A7135]" />
        </div>

        <span className="font-[var(--font-dm-sans)] text-[10px] font-medium uppercase tracking-[0.12em] text-[#7A746C]">
          {products.length} items
        </span>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}