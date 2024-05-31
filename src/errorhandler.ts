
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Request,Response,NextFunction } from "express";
import httpStatus from "http-status";


const notFound=((req:Request,res:Response,next:NextFunction)=>{

    
    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Order not found"
  
    })
})

export  default  notFound