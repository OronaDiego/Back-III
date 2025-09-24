import { Document } from "mongoose";

export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export type ProductType = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

export interface Product2 extends Product {
    color: string;
}

export type ProductType2 = ProductType & {
    color: string;
}

export type Product3 = Pick<Product, 'name' | 'price'>

/*
type Product3 = {
    name: string;
    price: number;
}
*/

export type Product4 = Omit<Product, 'description'>

/*
type Product4 = {
    name: string;
    price: number;
    stock: number;
}
*/

export interface ProductResponseDB extends Product {
    _id: string;
    __v: number;
}

export type ProductMongoDB = ProductType & Document