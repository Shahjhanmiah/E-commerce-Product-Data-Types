
import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { Order } from "./order.model";
import { Product } from "../../modules/product/product.model";


    const createOrder = async (req: Request, res: Response,) => {
    const orderData = req.body;
    const result = await OrderServices.createOrder(orderData);
    // Reduce the quantity in the inventory


    res.json({
      success: true,
      message: "Order is created successfully !",
      data: result,
    });
  };



  //  new api invontery 

  

 const createOrders = async (req: Request, res: Response) => {
  try {
    
    const { productId, quantity } = req.body;

    const product = await Order.findById(productId);
    if (!product) {
      return res.status(404).send('Product not found');
    }

    if (product.quantity < quantity) {
      return res.status(400).send('Not enough products in stock');
    }

    const totalPrice = product.price * quantity;

    const order = new Order({
      productId,
      quantity,
      totalPrice
    });

    

    await product.save();
    await order.save();

    res.status(201).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
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
    getOrderEmail,
    createOrders
    // getProductId,
    // deleteProductId,
    // putProductId
    
  };