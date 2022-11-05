import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// Categories
export const fetchCategories = async () => api.get("api/categories");

// Aticles
export const fetchArticles = async (queryString: string) =>
  api.get(`api/articles?${queryString}`);
