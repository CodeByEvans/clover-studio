import { envs } from "@/config/envs";
import axios from "axios";

const api = axios.create({
  baseURL: envs.apiUrl,
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
