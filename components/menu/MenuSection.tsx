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
          <h2 className="text-[22px] font-bold tracking-[-0.02em] text-neutral-950">
            {title}
          </h2>

          <div className="mt-2 h-[3px] w-8 rounded-full bg-neutral-900" />
        </div>

        <span className="text-[11px] font-medium text-neutral-400">
          {products.length} items
        </span>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}