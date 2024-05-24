import express, {Request,Response} from 'express';
import { OrderControllers } from './order.controller';
const router = express.Router();
// import { Movie } from './movie.model'
// import { MovieControllers } from '../movie.controller';
// import { ProductControllers } from './product.controller';



router.post("/",OrderControllers.createOrder);
  router.get("/", OrderControllers.getAllOrder);
//  router.get("/:productId", ProductControllers.getProductId);
//  router.delete("/:productId", ProductControllers.deleteProductId);
//  router.put("/:productId", ProductControllers.putProductId);

export const OrderRoutes = router;