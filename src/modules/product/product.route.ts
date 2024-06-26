import express, { Request, Response } from "express";
const router = express.Router();
// import { Movie } from './movie.model'
// import { MovieControllers } from '../movie.controller';
import { ProductControllers } from "./product.controller";

router.post("/",ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProduct);
router.get("/:productId", ProductControllers.getProductId);
router.delete("/:productId", ProductControllers.deleteProductId);
router.put("/:productId", ProductControllers.putProductId);
router.get("/:search", ProductControllers.searchTermProduct);

export const ProductRoutes = router;
