import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { FaEquals } from "react-icons/fa";
import Link from "next/link";

interface AllProductProps {
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

const AllProduct = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  const allProductData: AllProductProps[] = await res.json();

  const unitText = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  return (
    <div id="সব-পণ্য" className="mt-12">
      {/* Section Heading */}
      <div className="mb-8">
        <h1 className="text-[22px] font-bold text-[#1D271F]">সব পণ্য</h1>

        <p className="mt-2 text-[14px] text-gray-500">
          মোট {allProductData.length.toLocaleString("bn-BD")} টি পণ্য
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {allProductData.map((data) => (
          <Link href={`/product/${data.id}`} key={data.id}>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg">
              {/* Product Name */}
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

                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-[24px] font-bold text-[#1D271F]">
                    {data.today.toLocaleString("bn-BD")}

                    <span className="ml-1 text-[16px] font-medium text-gray-600">
                      টাকা
                    </span>
                  </h2>

                  {/* Percentage */}
                  <div
                    className={`flex items-center gap-1.5 rounded-xl px-3 py-2 ${
                      data.change.dir === "up"
                        ? "bg-red-50"
                        : data.change.dir === "down"
                          ? "bg-green-50"
                          : "bg-gray-100"
                    }`}
                  >
                    {data.change.dir === "up" ? (
                      <RxTriangleUp className="h-5 w-5 text-red-600" />
                    ) : data.change.dir === "down" ? (
                      <RxTriangleDown className="h-5 w-5 text-green-600" />
                    ) : (
                      <FaEquals className="h-3 w-3 text-gray-500" />
                    )}

                    <p
                      className={`text-[14px] font-semibold ${
                        data.change.dir === "up"
                          ? "text-red-600"
                          : data.change.dir === "down"
                            ? "text-green-600"
                            : "text-gray-500"
                      }`}
                    >
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

export default AllProduct;
