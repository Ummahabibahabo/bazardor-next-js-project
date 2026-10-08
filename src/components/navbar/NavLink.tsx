interface NavLinkProps {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
const NavLink = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const navLinksData: NavLinkProps[] = await res.json();
  console.log(navLinksData);
  return (
    <div className="w-full border-t border-gray-100 border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-[47px] px-5 flex items-center">
        <div className="flex items-center gap-7">
          {navLinksData.map((data) => (
            <div
              key={data.id}
              className="flex items-center gap-1.5 whitespace-nowrap cursor-pointer group"
            >
              {/* Icon */}
              <span className="text-[14px] leading-none">{data.icon}</span>

              {/* Name */}
              <span className="text-[#1D271F] text-[12px] font-medium group-hover:text-[#05893E] transition">
                {data.nameBn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLink;
