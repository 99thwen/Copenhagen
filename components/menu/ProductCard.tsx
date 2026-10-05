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
    <article className="group min-w-0 overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
      {/* Product image */}
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
          } group-hover:scale-[1.04]`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Product information */}
      <div className="p-3">
        <h3 className="line-clamp-2 min-h-[2.25rem] text-[14px] font-semibold leading-[1.15rem] text-neutral-900">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-[1rem] text-neutral-500">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="mt-3">
          {product.sizes ? (
            <div className="flex items-center gap-3">
              {product.sizes.map((size) => (
                <div key={size.name}>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-neutral-400">
                    {size.name}
                  </p>

                  <p className="text-[13px] font-bold text-neutral-950">
                    Rs. {size.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[14px] font-bold text-neutral-950">
              Rs. {product.price?.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}