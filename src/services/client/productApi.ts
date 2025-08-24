import axios from "axios";
import { ProductType } from "@/lib/types/Product.type";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<ProductType[]> => {
  const res = await axios.get(`${BASE_URL}/api/products`);
  return res.data;
};

export const getProduct = async (slug: string): Promise<ProductType> => {
  const res = await axios.get(`${BASE_URL}/api/products/${slug}`);
  return res.data;
};
