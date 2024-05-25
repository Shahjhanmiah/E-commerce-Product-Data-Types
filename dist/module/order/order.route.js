"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
// import { Movie } from './movie.model'
// import { MovieControllers } from '../movie.controller';
// import { ProductControllers } from './product.controller';
router.post("/", order_controller_1.OrderControllers.createOrder);
router.get("/", order_controller_1.OrderControllers.getAllOrder);
router.get("/:orderemail", order_controller_1.OrderControllers.getOrderEmail);
router.get("/quantity", order_controller_1.OrderControllers.createOrders);
//  router.delete("/:productId", ProductControllers.deleteProductId);
//  router.put("/:productId", ProductControllers.putProductId);
exports.OrderRoutes = router;
