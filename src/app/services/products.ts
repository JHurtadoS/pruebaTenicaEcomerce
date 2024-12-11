import { Product } from "../api";
import axiosInstance from "./axiosInstance";

export const fetchProducts = async () => {
    const response = await axiosInstance.get<Product[]>("/products/all");
    return response.data;
};

export const updateProduct = async (id: number, updates: Partial<Product>) => {
    const response = await axiosInstance.patch(`/products/${id}`, updates);
    return response.data;
};

export const deleteProduct = async (id: number) => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
};

export const createProduct = async (product: Product) => {
    const response = await axiosInstance.post("/products", product);
    return response.data;
};
