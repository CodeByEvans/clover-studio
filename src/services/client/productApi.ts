import { Product } from "@/lib/types/Product";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get(`${BASE_URL}/api/products`);
  return res.data;
};

export const getProduct = async (slug: string): Promise<Product> => {
  const res = await axios.get(`${BASE_URL}/api/products/${slug}`);
  return res.data;
};
