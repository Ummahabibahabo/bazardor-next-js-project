"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

interface CategoryPageProps {
  productData: {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: "kg" | "litre" | "dozen" | "piece";
    image: string;
    today: number;
    change: {
      dir: "up" | "down" | "flat";
      pct: number;
    };
  }[];
}

const CategorySortPage = ({ productData }: CategoryPageProps) => {
  const [sortBy, setSortBy] = useState<
    "default" | "high-to-low" | "low-to-high"
  >("default");
  console.log("sortBy", sortBy);
  const sortedProducts = [...productData];
  if (sortBy === "low-to-high") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sortBy === "high-to-low") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <div className="border border-gray-200 bg-white shadow-lg rounded-xl p-5 mt-6">
      <div className="flex items-center justify-end gap-2.5">
        <p className="text-[#1D271F] text-[14px]">সাজান</p>
        <div>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "default" | "high-to-low" | "low-to-high",
              )
            }
            className="px-3 py-1 border-2 border-gray-300 rounded-xl text-[#1D271F] text-[14px]"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">দাম: কম থেকে বেশি</option>
            <option value="high-to-low">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>
      <ProductCard sortedProducts={sortedProducts} />
    </div>
  );
};

export default CategorySortPage;
