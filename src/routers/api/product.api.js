import express, { Router } from "express"
import { createProductHandler } from "../../controllers/product.controllers.js"


const productRouter = express(Router)

productRouter.post("/create",createProductHandler)


export default productRouter