import Banner from "@/components/Banner";
import TopFallersProduct from "@/components/TopFallersProduct";

import TopRaiserProduct from "@/components/TopRaiserProduct";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <Banner></Banner>
      <TopRaiserProduct></TopRaiserProduct>
      <TopFallersProduct></TopFallersProduct>
    </div>
  );
}
