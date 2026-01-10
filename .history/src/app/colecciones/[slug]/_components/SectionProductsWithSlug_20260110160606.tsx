"use client";
import { useMemo, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardPrice,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductFilters from "@/components/ProductFilters";
import { SortKey, sortProducts } from "@/utils/sortProducts";
import { useProductsByCollection } from "@/hooks/use-products";

export const SectionProductsWithSlug = ({
  collectionId,
}: {
  collectionId: string;
}) => {
  const [sortBy, setSortBy] = useState<SortKey>("featured");
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const { data: sectionProducts = [] } = useProductsByCollection(collectionId);

  const sortedProducts = useMemo(() => {
    return sortProducts(sectionProducts, sortBy, minPrice, maxPrice);
  }, [sectionProducts, sortBy, minPrice, maxPrice]);

  const handleSort = (value: string) => {
    setSortBy(value as SortKey);
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const toggleFavorite = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleAddToCart = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Aquí va tu lógica para añadir al carrito
    console.log("Producto añadido al carrito:", productId);
  };

  return (
    <section className="container mx-auto px-0 md:px-6 lg:px-20 min-h-screen">
      <ProductFilters onSort={handleSort} onPriceChange={handlePriceChange} />

      {sortedProducts.length > 0 ? (
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-0 md:px-6 lg:px-20">
          {sortedProducts.map((product) => {
            const isFavorite = favorites.has(product.id);

            return (
              <Link
                key={product.id}
                href={`/productos/${product.slug}`}
                className="block"
              >
                <Card>
                  {/* Imagen del producto */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
                    <Image
                      src={product.portrait}
                      alt={product.title}
                      title={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardPrice>{product.price.toFixed(2)} €</CardPrice>
                  </CardHeader>

                  <CardFooter>
                    <CardAction
                      onClick={(e) => handleAddToCart(product.id, e)}
                      aria-label="Añadir al carrito"
                    >
                      <ShoppingCart size={18} />
                      Añadir al carrito
                    </CardAction>

                    <CardAction
                      variant="icon"
                      onClick={(e) => toggleFavorite(product.id, e)}
                      aria-label={
                        isFavorite
                          ? "Quitar de favoritos"
                          : "Añadir a favoritos"
                      }
                      className={
                        isFavorite
                          ? "bg-destructive text-primary-foreground hover:bg-destructive/90"
                          : ""
                      }
                    >
                      <Heart
                        size={20}
                        fill={isFavorite ? "currentColor" : "none"}
                        className="transition-all duration-200"
                      />
                    </CardAction>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </section>
      ) : (
        <p className="text-center text-muted-foreground mt-6">
          No hay productos disponibles en esta colección.
        </p>
      )}
    </section>
  );
};

export default SectionProductsWithSlug;
