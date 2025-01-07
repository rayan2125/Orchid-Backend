import express, { Router } from "express"
import { createMembershipProductHandler } from "../../controllers/mmbrPrdt.services.js"


const membershipProductRouter = express(Router)
membershipProductRouter.post("/create",createMembershipProductHandler)


export default membershipProductRouter