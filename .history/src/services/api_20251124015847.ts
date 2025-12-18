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
    console.log("Navigation response:", response);
    return response.data;
  },
};
