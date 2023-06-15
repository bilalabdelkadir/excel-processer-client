import axios, { AxiosResponse } from "axios";
import {
  deleteProductByIdUrl,
  updateProductUrl,
  uploadExcelFileUrl,
  getProductsUrl,
} from "./config";

export interface Product {
  id: string;
  description: string;
  unit: string;
  qty: number;
  rate: number;
  amount: number;
}

interface DeleteResponse {
  message: string;
}

const uploadExcelFile = (file: any) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(uploadExcelFileUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getProducts = () => axios.get(getProductsUrl);

const onDelete = async (id: string): Promise<DeleteResponse> => {
  try {
    const response: AxiosResponse<DeleteResponse> = await axios.delete(
      deleteProductByIdUrl(id)
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to delete product"
    );
  }
};

const onEdit = async (
  id: string,
  editedProduct: Partial<Product>
): Promise<void> => {
  try {
    await axios.patch(updateProductUrl(id), editedProduct, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Failed to update product"
    );
  }
};

export { uploadExcelFile, getProducts, onDelete, onEdit };
