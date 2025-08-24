import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCategories = () =>
  axios.get(`${BASE_URL}/api/categories`).then((res) => res.data);

export const getCategory = (id: string) =>
  axios.get(`${BASE_URL}/api/categories/${id}`).then((res) => res.data);
