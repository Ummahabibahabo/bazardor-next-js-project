import CategorySortPage from "../CategorySortPage";
import CategoryTitleIconPage from "../categoryTitleIcon";
interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}
const CategoryPage = async ({ params }: CategoryPageProps) => {
  // category title & icon
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/categories/${categoryId}`,
  );
  const categoryData = await res.json();
  // category Product
  const productRes = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );
  const productData = await productRes.json();

  return (
    <div>
      <CategoryTitleIconPage
        data={categoryData}
        productData={productData}
      ></CategoryTitleIconPage>
      <CategorySortPage
        data={categoryData}
        productData={productData}
      ></CategorySortPage>
    </div>
  );
};

export default CategoryPage;
