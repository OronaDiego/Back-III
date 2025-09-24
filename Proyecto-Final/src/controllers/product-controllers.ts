import { NextFunction, Request, Response } from "express";
import ProductServices, { productServices } from "../services/product-services";
import { httpResponse } from "../utils/http-response";

class ProductControllers {
  private service: ProductServices;

  constructor(service: ProductServices) {
    this.service = service;
  }

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.service.getAll();
      httpResponse.Ok(res, response);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this.service.getById(id);
      httpResponse.Ok(res, response);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.service.create(req.body);
      httpResponse.Created(res, response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this.service.update(id, req.body);
      httpResponse.Ok(res, response);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this.service.delete(id);
      httpResponse.Ok(res, response);
    } catch (error) {
      next(error);
    }
  };
}


export const productController = new ProductControllers(productServices);