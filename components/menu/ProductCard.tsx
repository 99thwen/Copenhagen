"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl bg-[#FFFDF9] shadow-[0_2px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
      {/* Image */}
      <div className="relative aspect-[1.15/1] w-full overflow-hidden bg-neutral-100">
        {!imageLoaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 animate-pulse bg-neutral-200"
          />
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          className={`object-cover transition-all duration-500 ease-out ${
            imageLoaded
              ? "scale-100 opacity-100"
              : "scale-[1.02] opacity-0"
          } group-hover:scale-[1.03]`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Content */}
      <div className="flex min-h-[112px] flex-col px-3 py-3">
        {/* Product name */}
        <h3 className="min-h-[2.2rem] font-playfair-display text-[15px] font-semibold leading-[1.1rem] tracking-[-0.01em] text-[#29241F]">
            {product.name}
          </h3>

        {/* Description */}
        {product.description && (
        <p className="mt-2 text-[13px] leading-[1.15rem] text-[#5F5A53]">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="mt-auto pt-2.5">
          {product.sizes ? (
            <div className="flex items-end gap-4">
              {product.sizes.map((size) => (
                <div key={size.name}>
                  <p className="mb-0.5 text-[8px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    {size.name}
                  </p>

                  <p className="text-[12px] font-semibold text-[#9A7135]">
                    Rs. {size.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[13px] font-semibold text-[#9A7135]">
              Rs. {product.price?.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}