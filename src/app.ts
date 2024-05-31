import express,{Request,Response} from "express"
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./module/order/order.route";
import globalErrorhandlear from "./globalErrorhandler";
import errorhandler from "./errorhandler";






const app = express()

//parsers
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);



app.get('/', (req: Request, res: Response) => {
  res.send('hi')
})
app.use(errorhandler)
app.use(globalErrorhandlear)




export default app ;
