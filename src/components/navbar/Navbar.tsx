import Image from "next/image";
import LogoImg from "@/app/assests/logo-icon.png";

import Link from "next/link";

const Navbar = () => {
  const date = new Date().toLocaleString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "long",
    timeStyle: "short",
  });
  return (
    <nav>
      <div className="flex justify-between items-center ">
        <div className="flex gap-5">
          <Link href={"/"}>
            <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#05893E] rounded-xl">
              <Image
                className="w-[30px] h-[30px] object-contain contrast-200 saturate-150"
                src={LogoImg}
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <div>
            <h1 className="text-[#1D271F] font-bold text-[20px]">বাজার দর</h1>
            <p className="text-[14px] text-[#1D271F] font-normal">{date}</p>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="font-semibold text-[#1D271F] text-[16px]">
            সাইন ইন
          </button>
          <button className=" bg-[#05893E] px-3 py-2 rounded-xl text-white font-semibold text-[16px]">
            সাইন আপ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
