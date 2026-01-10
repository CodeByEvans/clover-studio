import { createClient } from "@/lib/supabase/server";
import { Collection, Collections } from "@/types/collection.type";
import {
  Fragrance,
  FragranceCategories,
  FragranceCategory,
  Fragrances,
} from "@/types/fragances.type";
import {
  HeaderHighlight,
  HeaderHighlights,
} from "@/types/header_hightlights.type";
import { Navigation, NavigationItem } from "@/types/navigation.type";
import { Product, Products } from "@/types/product.type";

// Products Fetching Functions

// Fetch all products with their associated collection
export const getProducts = async (): Promise<Products> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"products", Product>("products")
    .select(`*, collection:collections(id,title, slug)`);

  if (error) throw error;
  return data;
};

export const getProductsByCollection = async (
  collectionSlug: string
): Promise<Products> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"products", Product>("products")
    .select(`*, collection:collections(id,title, slug)`)
    .eq("collection.slug", collectionSlug);
  if (error) throw error;
  return data;
};

// Fetch a single product with its associated collection
export const getProduct = async (slug: string): Promise<Product | null> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select(`*, collection:collections(id,title, slug)`)
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data;
};

// Fetch featured products
export const getFeaturedProducts = async (): Promise<Products> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"products", Product>("products")
    .select(`*, collection:collections(id,title, slug)`)
    .filter("featured", "eq", true);

  if (error) throw error;
  return data;
};

// Collections Fetching Functions

// Fetch all collections
export const getCollections = async (): Promise<Collections> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"collections", Collection>("collections")
    .select(`*, products:products(count)`);

  if (error) throw error;
  const collectionsWithCount = data.map((collection) => {
    const { products, ...rest } = collection;
    return {
      ...rest,
      productCount: products[0]?.count ?? 0,
    };
  });
  return collectionsWithCount;
};

// Fetch a single collection by slug
export const getCollection = async (
  slug: string
): Promise<Collection | null> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("collections")
    .select(`*`)
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data;
};

// Navigation and Header Highlights Fetching Functions

// Fetch navigation items
export const getNavigation = async (): Promise<Navigation> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"navigation", NavigationItem>("navigation")
    .select(`*`)
    .filter("active", "eq", true);

  if (error) throw error;
  return data;
};

// Fetch header highlights
export const getHeaderHighlights = async (): Promise<HeaderHighlights> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"header_highlights", HeaderHighlight>("header_highlights")
    .select(`*`)
    .filter("active", "eq", true);

  if (error) throw error;
  return data;
};

// Fragrances Fetching Functions

// Fetch all fragrances with their categories
export const getFragances = async (): Promise<Fragrances> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"fragrances", Fragrance>("fragrances")
    .select(
      `id, name, intensity, category:fragrance_categories(id, name), created_at, updated_at`
    );

  if (error) throw error;

  const fragrancesWith = data.map((fragrance) => {
    const { category, ...rest } = fragrance;
    return {
      ...rest,
      category: category[0] ?? category,
    };
  });

  return fragrancesWith;
};

// Fetch all fragrance categories
export const getFraganceCategories = async (): Promise<FragranceCategories> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from<"fragrance_categories", FragranceCategory>("fragrance_categories")
    .select(`*`);

  if (error) throw error;
  return data;
};
