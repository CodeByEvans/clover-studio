import { notFound } from "next/navigation";
import ProductDetailGeneral from "@/components/product/product-detail-general";
import ProductDetailSober from "@/components/product/product-detail-sober";
import ProductDetailColorful from "@/components/product/product-detail-colorful";
import { GET } from "@/app/api/products/route";
import { Product } from "@/lib/types/Product";

// Función para obtener productos directamente
async function getProductsForSSG(): Promise<Product[]> {
  try {
    // Llamar directamente a la función de la API route
    const response = await GET();
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products for SSG:", error);
    return [];
  }
}

// SERVER-SIDE: para SSG
export async function generateStaticParams() {
  const products = await getProductsForSSG();
  return products.map((product: Product) => ({
    slug: product.slug.toString(),
  }));
}

// SERVER-SIDE: para SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const products = await getProductsForSSG();
  const product = products.find(
    (p: Product) => p.slug.toString() === resolvedParams.slug
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
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const products = await getProductsForSSG();

  const product = products.find(
    (p: Product) => p.slug.toString() === resolvedParams.slug
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
