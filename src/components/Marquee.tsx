import { FaEquals } from "react-icons/fa";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import Marquee from "react-fast-marquee";

interface MarqueeProps {
  image: string;
  nameBn: string;
  id: number;
  today: number;
  unit: "kg" | "litre" | "dozen" | "piece";
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const unitText = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const MarqueePage = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

  const marqueeData: MarqueeProps[] = await res.json();

  return (
    <div className="w-full overflow-hidden border-y border-gray-200 bg-white">
      <Marquee>
        <div className="flex">
          {marqueeData.map((data) => (
            <div
              key={data.id}
              className="flex items-center gap-2 border-r-2 border-gray-100 px-4 py-2"
            >
              {/* Image */}
              <span className="text-base">{data.image}</span>

              {/* Name */}
              <span className="text-[16px] font-bold text-[#1D271F]">
                {data.nameBn}
              </span>

              {/* Price */}
              <span className="text-[14px] text-[#1D271F]">
                {data.today} টাকা/{unitText[data.unit]}
              </span>

              {/* Change */}
              <span
                className={`flex items-center gap-0.5 text-xs font-semibold ${
                  data.change.dir === "up"
                    ? "text-red-500"
                    : data.change.dir === "down"
                      ? "text-green-600"
                      : "text-gray-500"
                }`}
              >
                {data.change.dir === "up" ? (
                  <RxTriangleUp className="text-base" />
                ) : data.change.dir === "down" ? (
                  <RxTriangleDown className="text-base" />
                ) : (
                  <FaEquals className="text-[10px]" />
                )}

                <span>{data.change.pct}%</span>
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
