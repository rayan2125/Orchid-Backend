import express, { Router } from "express"
import { createBookingHandler } from "../../controllers/mmbrBkng.controllers.js";


const mmberBookingRouter = express(Router);

mmberBookingRouter.post("/create", createBookingHandler);



export default mmberBookingRouter