"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const result = yield order_service_1.OrderServices.createOrder(orderData);
    // Reduce the quantity in the inventory
    res.json({
        success: true,
        message: "Order is created successfully !",
        data: result,
    });
});
//  new api invontery 
//  const createOrders = async (req: Request, res: Response) => {
//   try {
//     const { productId, quantity } = req.body;
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res.status(404).send('Product not found');
//     }
//     if (product.quantity < quantity) {
//       return res.status(400).send('Not enough products in stock');
//     }
//     const totalPrice = product.price * quantity;
//     const product = new Product ({
//       productId,
//       quantity,
//       totalPrice
//     });
//     await product.save();
//     await product.save();
//     res.status(201).send(product);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
// Order allProducg 
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getAllOrder();
        res.status(200).json({
            success: true,
            message: "Order are fetched successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
        });
    }
});
// OrderEmail 
const getOrderEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderemail } = req.params;
        const result = yield order_service_1.OrderServices.getOrderEmail(orderemail);
        res.status(200).json({
            success: true,
            message: "order email are delete successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrder,
    getOrderEmail,
    // createOrders
    // getProductId,
    // deleteProductId,
    // putProductId
};
