import axios from "axios";

export const getCategories = () =>
  axios.get("/api/categories").then((res) => res.data);
export const getCategory = (id: string) =>
  axios.get(`/api/categories/${id}`).then((res) => res.data);
