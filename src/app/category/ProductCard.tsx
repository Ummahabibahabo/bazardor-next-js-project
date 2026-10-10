import { FaEquals } from "react-icons/fa";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

interface ProductCardProps {
  sortedProducts: {
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

const ProductCard = ({ sortedProducts }: ProductCardProps) => {
  const unitText = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  return (
    <div>
      <h1 className="text-[16px] text-[#1D271F] py-5">
        মোট {sortedProducts.length} টি পণ্য দেখানো হচ্ছে
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {sortedProducts.map((data) => {
          return (
            <div
              key={data.id}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
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
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
