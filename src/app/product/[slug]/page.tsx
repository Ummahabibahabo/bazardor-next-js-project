import DetailsCard from "../DetailsCard";

interface ProductDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const ProductsDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { slug } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${slug}`,
  );
  const data = await res.json();

  return <DetailsCard data={data}></DetailsCard>;
};

export default ProductsDetailsPage;
