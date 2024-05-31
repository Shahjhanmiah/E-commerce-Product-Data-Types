/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Request,Response,NextFunction } from "express";

const globalErrorhandlear=((error:any,req:Request,res:Response,next:NextFunction)=>{

    let statusCode=5000;
    let  message = "message" || 'somthing is worning!';
  
    return res.status(statusCode).json({
      
      success: false,
      message: "Order not found"
      
  
    })
})

export  default globalErrorhandlear