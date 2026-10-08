import { RxTriangleUp } from "react-icons/rx";

interface TopRaiserProductProps {
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

const TopRaiserProduct = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  const riserData: TopRaiserProductProps[] = await res.json();

  const topRiserData = riserData
    .filter((data) => data.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
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
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center bg-red-50 h-10 w-10 rounded-full">
          <RxTriangleUp className="text-red-600 h-6 w-6" />
        </div>

        <h1 className="text-[22px] text-[#1D271F] font-bold">আজ দাম বেড়েছে</h1>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topRiserData.map((data) => (
          <div
            className="bg-white shadow-md border border-gray-100 rounded-xl p-5 hover:shadow-lg transition-shadow duration-300"
            key={data.id}
          >
            {/* Product Information */}
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="flex items-center justify-center bg-gray-100 h-[55px] w-[55px] rounded-xl">
                  <span className="text-3xl">{data.image}</span>
                </div>

                {/* Product Name */}
                <div>
                  <p className="text-[18px] text-[#1D271F] font-semibold">
                    {data.nameBn}
                  </p>

                  <p className="text-[14px] text-gray-500 mt-1">
                    প্রতি {unitText[data.unit]}
                  </p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-[14px] text-gray-500 mb-1">আজকের দাম</p>

              <div className="flex justify-between items-center">
                <h1 className="font-extrabold text-[24px] text-[#1D271F]">
                  {data.today.toLocaleString("bn-Bd")}

                  <span className="font-medium text-[16px] text-gray-600 ml-1">
                    টাকা
                  </span>
                </h1>

                {/* Price Increase */}
                <div className="bg-gray-100 px-3 py-2 rounded-xl flex items-center gap-1.5">
                  <RxTriangleUp className="text-red-600 h-5 w-5" />

                  <p className="text-red-600 font-semibold text-[14px]">
                    {Math.abs(data.change.pct).toLocaleString("bn-BD")}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRaiserProduct;
