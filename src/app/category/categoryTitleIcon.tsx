interface CategoryTitleIconPageProps {
  data: {
    id: string;
    nameBn: string;
    icon: string;
  };
  productData: {
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
const CategoryTitleIconPage = ({
  data,
  productData,
}: CategoryTitleIconPageProps) => {
  return (
    <div className="border border-gray-200 bg-white shadow-lg rounded-xl p-5">
      <div className="flex items-center gap-2">
        <span className="text-[28px] ">{data.icon}</span>
        <div>
          <p className="text-[24px] font-bold text-[#1D271F]">{data.nameBn}</p>
          <p className="text-[16px] text-[#1D271F]">
            {productData.length} টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryTitleIconPage;
