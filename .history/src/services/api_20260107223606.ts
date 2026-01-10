import { clientEnvs } from "@/config/client-envs";
import { Collections } from "@/types/collection.type";
import { FragranceCategories, Fragrances } from "@/types/fragances.type";
import { HeaderHighlights } from "@/types/header_hightlights.type";
import { Navigation } from "@/types/navigation.type";
import { Products } from "@/types/product.type";

import axios from "axios";

const api = axios.create({
  baseURL: clientEnvs.apiUrl,
  headers: { "Content-Type": "application/json" },
});

export const productsAPI = {
  list: async ({
    search,
    collection,
    page = 1,
    perPage = 15,
  }: {
    search?: string;
    collection?: string;
    page?: number;
    perPage?: number;
  }): Promise<Products> => {
    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (collection) params.append("collection", collection);
    params.append("limit", perPage.toString());
    params.append("page", page.toString());

    const response = await api.get(`/products?${params.toString()}`);
    return response.data;
  },
  getFeatured: async (): Promise<Products> => {
    const response = await api.get("/products/featured");
    return response.data;
  },
  getByCollection: async (collectionSlug: string): Promise<Products> => {
    const response = await api.get(`/collections/${collectionSlug}/products`);
    return response.data;
  },
  search: async ({
    search,
    collection,
    limit,
  }: {
    search?: string;
    collection?: string;
    limit?: number;
  }): Promise<Products> => {
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (collection) params.append("collection", collection);
    if (limit) params.append("limit", limit.toString());

    const response = await api.get(`/products?${params.toString()}`);
    return response.data;
  },
};

export const collectionsAPI = {
  getAll: async (): Promise<Collections> => {
    const response = await api.get("/collections");
    return response.data;
  },
};

export const navigationAPI = {
  getAll: async (): Promise<Navigation> => {
    const response = await api.get("/navigation");
    return response.data;
  },
};

export const headerHighlightsAPI = {
  getAll: async (): Promise<HeaderHighlights> => {
    const response = await api.get("/header-highlights");
    return response.data;
  },
};

export const fragrancesAPI = {
  getAll: async (): Promise<Fragrances> => {
    const response = await api.get("/fragrances");
    return response.data;
  },
};

export const fragranceCategoriesAPI = {
  getAll: async (): Promise<FragranceCategories> => {
    const response = await api.get("/fragrance-categories");
    return response.data;
  },
};

export const contactAPI = {
  send: async (data: any) => {
    const response = await api.post("/contact", data);
    return response.data;
  },
};
