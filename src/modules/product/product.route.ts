import express, {Request,Response} from 'express';
const router = express.Router();
// import { Movie } from './movie.model'
// import { MovieControllers } from '../movie.controller';
import { ProductControllers } from './product.controller';



router.post("/",ProductControllers.createProduct);
// router.get("/", MovieControllers.getAllMovies);
// router.get("/:slug", MovieControllers.getMovieBySlug);

export const ProductRoutes = router;