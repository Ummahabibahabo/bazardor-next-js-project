interface CategoryPageProps {
  data: {
    id: string;
    nameBn: string;
    icon: string;
  };
}

const CategorySortPage = ({ data }: CategoryPageProps) => {
  return (
    <div className="border border-gray-200 bg-white shadow-lg rounded-xl p-5 mt-6">
      <div className="flex items-center justify-end gap-2.5">
        <p className="text-[#1D271F] text-[14px]">সাজান</p>
        <div>
          <select
            defaultValue="ডিফল্ট"
            className=" px-3 py-1 border-2 border-gray-300 rounded-xl text-[#1D271F] text-[14px]"
          >
            <option disabled={true}>ডিফল্ট</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategorySortPage;
