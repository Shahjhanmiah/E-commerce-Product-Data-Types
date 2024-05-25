"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import { Movie } from './movie.model'
// import { MovieControllers } from '../movie.controller';
const product_controller_1 = require("./product.controller");
router.post("/", product_controller_1.ProductControllers.createProduct);
router.get("/", product_controller_1.ProductControllers.getAllProduct);
router.get("/:productId", product_controller_1.ProductControllers.getProductId);
router.delete("/:productId", product_controller_1.ProductControllers.deleteProductId);
router.put("/:productId", product_controller_1.ProductControllers.putProductId);
router.get("/:search", product_controller_1.ProductControllers.searchTermProduct);
exports.ProductRoutes = router;
