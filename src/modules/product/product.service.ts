import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};
// specie id in create a
const getProductId = async (id: string) => {
  const result = await Product.findOne({ id });
  return result;
};

// Product delete

const deleteProductId = async (id: string) => {
  const result = await Product.findOneAndUpdate({ id }, { isDeleted: true });
  return result;
};

// put
const putProductId = async (id: string) => {
  const result = await Product.updateOne({ id }, { isUpdated: true });
  return result;
};

const searchTermProduct = async (searchTerm: string) => {
  const result = await Product.findOne({ searchTerm });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getProductId,
  deleteProductId,
  putProductId,
  searchTermProduct,
};
