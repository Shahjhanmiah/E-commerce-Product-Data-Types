
import { Request, Response } from "express";
import { ProductServices } from './product.service';
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


  const getAllProduct = async (req: Request, res: Response) => {
    try {
      const result = await ProductServices.getAllProduct();
  
      res.status(200).json({
        success: true,
        message: "Product are fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };
// product single id create data 
  const getProductId = async (req: Request, res: Response) => {
    try {
      const {productId} = req.params
      const result = await ProductServices.getProductId(productId);
  
      res.status(200).json({
        success: true,
        message: "Product are fetched successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };

  // delte data  api 

  const deleteProductId = async (req: Request, res: Response) => {
    try {
      const {productId} = req.params
      const result = await ProductServices.deleteProductId(productId);
  
      res.status(200).json({
        success: true,
        message: "Product are delete successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };


  const putProductId = async (req: Request, res: Response) => {
    try {
      const {productId} = req.params
      const result = await ProductServices.putProductId(productId);
  
      res.status(200).json({
        success: true,
        message: "Product are update  successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };

  //  Product  Search searchTerm

  const searchTermProduct = async (req: Request, res: Response) => {
    try {
      const {search} = req.params
      const result = await ProductServices.searchTermProduct(search);
  
      res.status(200).json({
        success: true,
        message: "Product are Search successfully !",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Could not fetch movies!",
        error: err,
      });
    }
  };



  

  export const ProductControllers = {
    createProduct,
    getAllProduct,
    getProductId,
    deleteProductId,
    putProductId,
    searchTermProduct
    
  };