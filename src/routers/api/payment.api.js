import epress, { Router } from "express"
import { addPaymentDetails } from "../../controllers/mmbrPy.controllers.js"
const paymentRouter =  epress(Router)

paymentRouter.post("/create",addPaymentDetails)





export default paymentRouter