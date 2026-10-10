import Link from "next/link";
import { RxTriangleDown } from "react-icons/rx";

interface TopFallerProductProps {
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
}

const TopFallersProduct = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  const fallersData: TopFallerProductProps[] = await res.json();

  const topFallersData = fallersData
    .filter((data) => data.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  const unitText = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  return (
    <div className="mt-10">
      {/* Section Heading */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
          <RxTriangleDown className="h-6 w-6 text-green-600" />
        </div>

        <h1 className="text-[22px] font-bold text-[#1D271F]">আজ দাম কমেছে</h1>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {topFallersData.map((data) => (
          <Link href={`/product/${data.id}`} key={data.id}>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="flex h-[55px] w-[55px] items-center justify-center rounded-xl bg-gray-100">
                    <span className="text-3xl">{data.image}</span>
                  </div>

                  <div>
                    <p className="text-[18px] font-semibold text-[#1D271F]">
                      {data.nameBn}
                    </p>

                    <p className="mt-1 text-[14px] text-gray-500">
                      প্রতি {unitText[data.unit]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price and Percentage */}
              <div className="mt-6">
                <p className="mb-1 text-[14px] text-gray-500">আজকের দাম</p>

                <div className="flex items-center justify-between">
                  <h1 className="text-[24px] font-bold text-[#1D271F]">
                    {data.today.toLocaleString("bn-BD")}

                    <span className="ml-1 text-[16px] font-medium text-gray-600">
                      টাকা
                    </span>
                  </h1>

                  <div className="flex items-center gap-1.5 rounded-xl bg-green-50 px-3 py-2">
                    <RxTriangleDown className="h-5 w-5 text-green-600" />

                    <p className="text-[14px] font-semibold text-green-600">
                      {Math.abs(data.change.pct).toLocaleString("bn-BD")}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopFallersProduct;
