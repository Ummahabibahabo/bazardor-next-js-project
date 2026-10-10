interface TodaysPriceProps {
  data: {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: "kg" | "litre" | "dozen" | "piece";
    image: string;
    today: number;
    yesterday: number;
    change: {
      dir: "up" | "down" | "flat";
      pct: number;
    };
    markets: {
      market: string;
      division: string;
      min: number;
      max: number;
    }[];
  };
}
const TodaysPrice = ({ data }: TodaysPriceProps) => {
  const lowestPrice = Math.min(...data.markets.map((item) => item.min));
  const heighestPrice = Math.max(...data.markets.map((item) => item.max));
  const avg =
    data.markets.reduce((total, item) => total + (item.min + item.max) / 2, 0) /
    data.markets.length;
  return (
    <div className="mt-10 bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="p-4 sm:p-5">
        <h1 className="text-xl text-[#1D271F] font-bold mb-4">
          দামের সারসংক্ষেপ
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2 border-2 border-gray-200 rounded-xl p-5 text-left">
            <p className="text-sm text-[#1D271F]">সর্বনিম্ন দাম</p>
            <h2 className="text-[#1A9951] text-[20px] font-bold">
              {lowestPrice.toLocaleString("bn-BD")}{" "}
              <span className="font-normal">টাকা</span>
            </h2>
            <p className="text-sm text-[#1D271F]">সবচেয়ে কম দামের বাজার</p>
          </div>

          <div className="space-y-2 border-2 border-gray-200 rounded-xl p-5 text-left">
            <p className="text-sm text-[#1D271F]">সর্বাধিক দাম</p>
            <h2 className="text-[#D03739] text-[20px] font-bold">
              {heighestPrice.toLocaleString("bn-BD")}{" "}
              <span className="font-normal">টাকা</span>
            </h2>
            <p className="text-sm text-[#1D271F]">সবচেয়ে বেশি দামের বাজার</p>
          </div>

          <div className="space-y-2 border-2 border-gray-200 rounded-xl p-5 text-left sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-[#1D271F]">গড় দাম</p>
            <h2 className="text-[#05893E] text-[20px] font-bold">
              {avg.toLocaleString("bn-BD", {
                maximumFractionDigits: 2,
              })}{" "}
              <span className="font-normal">টাকা</span>
            </h2>
            <p className="text-sm text-[#1D271F]">
              প্রতি{" "}
              {data.unit === "kg"
                ? "কেজি"
                : data.unit === "litre"
                  ? "লিটার"
                  : data.unit === "dozen"
                    ? "ডজন"
                    : "পিস"}
              -এর হিসাবে
            </p>
          </div>
        </div>
      </div>

      {/* Market Price Table */}
      <div className="p-4 sm:p-5">
        <h2 className="text-xl text-[#1D271F] font-semibold mb-3">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <div className="border border-[#E1E7E1] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-sm">
              <thead className="bg-[#FAFCFA]">
                <tr>
                  <th className="text-[#7A827B] text-left font-bold px-3 py-3 border-b border-gray-200">
                    বাজার
                  </th>
                  <th className="text-[#7A827B] text-left font-bold px-3 py-3 border-b border-gray-200">
                    বিভাগ
                  </th>
                  <th className="text-[#7A827B] text-right font-bold px-3 py-3 border-b border-gray-200">
                    সর্বনিম্ন
                  </th>
                  <th className="text-[#7A827B] text-right font-bold px-3 py-3 border-b border-gray-200">
                    সর্বাধিক
                  </th>
                  <th className="text-[#7A827B] text-right font-semibold px-3 py-3 border-b border-gray-200">
                    গড়
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.markets.map((item, index) => {
                  const average = (item.min + item.max) / 2;

                  return (
                    <tr
                      key={`${item.market}-${index}`}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#F0F4F0]"}
                    >
                      <td className="text-[#1D271F] text-left px-3 py-3 border-b border-gray-200">
                        {item.market}
                      </td>

                      <td className="text-[#1D271F] text-left px-3 py-3 border-b border-gray-200">
                        {item.division}
                      </td>

                      <td className="text-[#1D271F] text-right px-3 py-3 border-b border-gray-200 whitespace-nowrap">
                        {item.min.toLocaleString("bn-BD")} টাকা
                      </td>

                      <td className="text-[#1D271F] text-right px-3 py-3 border-b border-gray-200 whitespace-nowrap">
                        {item.max.toLocaleString("bn-BD")} টাকা
                      </td>

                      <td className="text-[#1D271F] text-right font-bold px-3 py-3 border-b border-gray-200 whitespace-nowrap">
                        {average.toLocaleString("bn-BD", {
                          maximumFractionDigits: 2,
                        })}{" "}
                        টাকা
                      </td>
                    </tr>
                  );
                })}

                {data.markets.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center text-gray-500 px-3 py-6"
                    >
                      কোনো বাজারের তথ্য পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysPrice;
