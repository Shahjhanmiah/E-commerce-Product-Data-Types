
import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { Product } from './product.model';

const createProduct = async (req: Request, res: Response) => {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);
  
    res.json({
      success: true,
      message: "Movie is created successfully !",
      data: result,
    });
  };

  // geat all movice 

  

  export const ProductControllers = {
    createProduct,
    
  };