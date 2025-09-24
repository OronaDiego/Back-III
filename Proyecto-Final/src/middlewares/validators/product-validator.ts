import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const ProductSchemaPost = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(3).max(100).required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().min(0).required(),
});

const ProductSchemaGet = Joi.object({
  id: Joi.string().required(),
});

export const validatePostProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = ProductSchemaPost.validate(req.body, { abortEarly: false });
  error ? res.status(400).send(error) : next();
};

export const validateGetProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { error } = ProductSchemaGet.validate(req.params, {
    abortEarly: false,
  });
  error ? res.status(400).send(error) : next();
};
