import { clientEnvs } from "@/config/client-envs";

import axios from "axios";

const api = axios.create({
  baseURL: clientEnvs.apiUrl,
  headers: { "Content-Type": "application/json" },
});

export const productsAPI = {
  getAll: async () => {
    const response = await api.get("/products");
    return response.data;
  },
};

export const collectionsAPI = {
  getAll: async () => {
    const response = await api.get("/collections");
    return response.data;
  },
};

export const navigationAPI = {
  getAll: async () => {
    const response = await api.get("/navigation");
    return response.data;
  },
};

export const headerHighlightsAPI = {
  getAll: async () => {
    const response = await api.get("/header-highlights");
    return response.data;
  },
};

export const fragancesAPI = {
  getAll: async () => {
    const response = await api.get("/fragrances");
    return response.data;
  },
};

export const fraganceCategoriesAPI = {
  getAll: async () => {
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
