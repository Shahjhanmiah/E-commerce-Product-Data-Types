
import { Request, Response } from "express";
import { OrderServices } from "./order.service";


    const createOrder = async (req: Request, res: Response) => {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);
  
    res.json({
      success: true,
      message: "Order is created successfully !",
      data: result,
    });
  };


  // Order allProducg 

  const getAllOrder = async (req: Request, res: Response) => {
    try {
      const result = await OrderServices.getAllOrder();
  
      res.status(200).json({
        success: true,
        message: "Order are fetched successfully !",
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

  // OrderEmail 

  const  getOrderEmail = async (req: Request, res: Response) => {
    try {
      const {orderemail} = req.params
      const result = await OrderServices.getOrderEmail(orderemail);
  
      res.status(200).json({
        success: true,
        message: "order email are delete successfully !",
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

 

  export const OrderControllers = {
    createOrder,
    getAllOrder,
    getOrderEmail
    // getProductId,
    // deleteProductId,
    // putProductId
    
  };