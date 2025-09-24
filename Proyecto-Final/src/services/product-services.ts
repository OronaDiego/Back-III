import { Model } from "mongoose";
import { Product, ProductMongoDB } from "../types/product-type";
import { NotFoundError } from "../utils/error-custom";
import { ProductModel } from "../models/product-model";

export default class ProductServices {
  private model: Model<Product>;

  constructor(model: Model<Product>) {
    this.model = model;
  }

  getAll = async (): Promise<ProductMongoDB[]> => {
    try {
      const response = await this.model.find();
      if (!response) throw new NotFoundError("No products found");
      return response;
    } catch (error) {
      throw error;
    }
  };

  create = async (body: Product) => {
    try {
      const response = await this.model.create(body);
      if (!response) throw new NotFoundError("Product not created");
      return response;
    } catch (error) {
      throw error;
    }
  };

  update = async (id: string, body: Product) => {
    try {
      const response = await this.model.findByIdAndUpdate(id, body, {
        new: true,
      });
      if (!response) throw new NotFoundError("Product not found");
      return response;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id: string) => {
    try {
      const response = await this.model.findByIdAndDelete(id);
      if (!response) throw new NotFoundError("Product not found");
      return response;
    } catch (error) {
      throw error;
    }
  };

  getById = async (id: string): Promise<ProductMongoDB> => {
    try {
      const response = await this.model.findById(id);
      if (!response) throw new NotFoundError("Product not found");
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export const productServices = new ProductServices(ProductModel);