import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: TOrder) => {
   const result = await Order.create(payload);
      return result;
    };
// const createOrders = async (payload: TOrder) => {
//    const result = await Order.create(payload);
//       return result;
//     };

    const getAllOrder = async () => {
      const result = await Order.find();
      return result;
    };
    const getOrderEmail = async (email:string) => {
      const result = await Order.findOne({email});
      return result;
    };



    export const OrderServices = {
      createOrder,
      getAllOrder,
      getOrderEmail,
      //  createOrders
      
      
      
      
    };