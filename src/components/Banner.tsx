import Link from "next/link";
import BannerImg from "@/app/assests/bazar-hero.png";
import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "long",
    timeStyle: "short",
  });
  return (
    <div className="flex flex-col md:flex-row justify-between items-center overflow-hidden bg-white border border-gray-100 rounded-xl shadow-lg">
      {/* Content */}
      <div className="w-full md:w-1/2 p-6 md:p-8 space-y-4">
        <p className="inline-block text-[14px] font-bold text-[#05893E] bg-green-50 px-3 py-2 rounded-xl">
          {date}
        </p>
        <h1 className="text-[30px] md:text-[36px] font-bold text-[#1D271F]">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="text-[15px] md:text-[16px] text-[#1D271F]">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link
          href="#সব-পণ্য"
          className="inline-block bg-[#05893E] px-4 py-2.5 rounded-xl text-white font-semibold text-[14px] hover:bg-[#047535] transition"
        >
          সব পণ্য দেখুন
        </Link>
      </div>
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src={BannerImg}
          alt="বাজারের পণ্য"
          width={400}
          height={400}
          className="w-[280px] md:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};
export default Banner;
