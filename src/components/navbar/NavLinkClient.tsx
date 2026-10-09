"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavLinkClientProps {
  navLinksData: {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
  }[];
}
const NavLinkClient = ({ navLinksData }: NavLinkClientProps) => {
  const pathname = usePathname();
  return (
    <div className="w-full border-t border-gray-100 border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-[47px] px-5 flex items-center">
        <div className="flex items-center gap-7">
          {navLinksData.map((data) => {
            return (
              <Link
                className={
                  pathname === `/category/${data.slug}`
                    ? "text-white font-medium px-3 py-2 rounded-xl bg-[#047F39]"
                    : ""
                }
                key={data.id}
                href={`/category/${data.slug}`}
              >
                <div className="flex items-center gap-1.5 whitespace-nowrap cursor-pointer group">
                  {/* Icon */}
                  <span className="text-[14px] leading-none">{data.icon}</span>

                  {/* Name */}
                  <span className=" text-[14px]  ">{data.nameBn}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavLinkClient;
