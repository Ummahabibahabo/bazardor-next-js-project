import { FaEquals } from "react-icons/fa";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

interface DetailsCardProps {
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
  };
}

const unitText: Record<DetailsCardProps["data"]["unit"], string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const DetailsCard = ({ data }: DetailsCardProps) => {
  const priceDifference = Math.abs(data.today - data.yesterday);

  const priceMessage =
    data.today > data.yesterday
      ? `গতকালের তুলনায় আজ দাম বেড়েছে ${priceDifference.toLocaleString("bn-BD")} টাকা`
      : data.today < data.yesterday
        ? `গতকালের তুলনায় আজ দাম কমেছে ${priceDifference.toLocaleString("bn-BD")} টাকা`
        : "গতকালের তুলনায় আজ দাম অপরিবর্তিত";

  const changeStyle =
    data.change.dir === "up"
      ? {
          container: "bg-red-50",
          text: "text-red-600",
        }
      : data.change.dir === "down"
        ? {
            container: "bg-green-50",
            text: "text-green-600",
          }
        : {
            container: "bg-gray-100",
            text: "text-gray-500",
          };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white shadow-lg border border-gray-200 rounded-xl p-4 sm:p-5">
        {/* Product Information */}
        <div className="flex gap-3 sm:gap-4 items-center min-w-0 flex-1">
          <div className="flex shrink-0 items-center justify-center bg-gray-200 rounded-xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px]">
            <span className="text-[25px]" aria-hidden="true">
              {data.categoryIcon}
            </span>
          </div>

          <div className="flex flex-col min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-[#1D271F] break-words">
              {data.nameBn}
            </h1>

            <p className="text-sm text-[#1D271F]">
              প্রতি {unitText[data.unit]} {data.categoryNameBn}
            </p>

            <p className="text-sm text-[#1D271F] mt-1 leading-relaxed">
              {priceMessage}
            </p>
          </div>
        </div>

        {/* Today's Price */}
        <div className="bg-gray-100 p-3 sm:p-4 rounded-xl text-center w-full sm:w-auto sm:min-w-[150px] shrink-0">
          <p className="text-sm text-[#1D271F]">আজকের দাম</p>

          <h2 className="text-2xl sm:text-[30px] font-bold text-[#1D271F] my-1">
            {data.today.toLocaleString("bn-BD")}
          </h2>

          <p className="text-sm text-[#1D271F]">টাকা / {unitText[data.unit]}</p>

          {/* Percentage Change */}
          <div
            className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-1.5 mt-3 ${changeStyle.container}`}
          >
            {data.change.dir === "up" ? (
              <RxTriangleUp
                className="h-5 w-5 text-red-600 shrink-0"
                aria-hidden="true"
              />
            ) : data.change.dir === "down" ? (
              <RxTriangleDown
                className="h-5 w-5 text-green-600 shrink-0"
                aria-hidden="true"
              />
            ) : (
              <FaEquals
                className="h-3 w-3 text-gray-500 shrink-0"
                aria-hidden="true"
              />
            )}

            <p className={`text-sm font-semibold ${changeStyle.text}`}>
              {Math.abs(data.change.pct).toLocaleString("bn-BD")}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
