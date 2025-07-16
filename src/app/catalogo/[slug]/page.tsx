import { notFound } from "next/navigation";
import ProductDetailGeneral from "@/components/product/product-detail-general";
import ProductDetailSober from "@/components/product/product-detail-sober";
import ProductDetailColorful from "@/components/product/product-detail-colorful";
import { ProductType } from "@/lib/types/Product.type";
import { getProducts } from "@/lib/api/productApi";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// SERVER-SIDE: para SSG
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: ProductType) => ({
    slug: product.slug.toString(),
  }));
}

// SERVER-SIDE: para SEO
export async function generateMetadata({ params }: ProductPageProps) {
  const products = await getProducts();
  const product = products.find(
    (p: ProductType) => p.slug.toString() === params.slug
  );

  if (!product) {
    return {
      title: "Producto no encontrado - Clover Studio",
    };
  }

  return {
    title: `${product.name} - Clover Studio`,
    description: product.description || `${product.name} - ${product.category}`,
  };
}

// SERVER-SIDE
export default async function ProductPage({ params }: ProductPageProps) {
  const products = await getProducts();

  const product = products.find(
    (p: ProductType) => p.slug.toString() === params.slug
  );

  if (!product) {
    notFound();
  }

  // Render different components based on product type
  if (product.type === "sober") {
    return <ProductDetailSober product={product} />;
  }

  if (product.type === "colorful") {
    return <ProductDetailColorful product={product} />;
  }

  // Default general type
  return <ProductDetailGeneral product={product} />;
}
