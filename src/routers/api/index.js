import express from "express"
import memberRouter from "./mmber.api.js"
import emiRouter from "./emi.api.js"
import paymentRouter from "./payment.api.js"


const routers = express.Router()
routers.use("/member",memberRouter)
routers.use("/emi",emiRouter)
routers.use("/payment",paymentRouter)
export default routers