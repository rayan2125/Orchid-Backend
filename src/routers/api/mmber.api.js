import express, { Router } from "express"
import { MembersDetailsController } from "../../controllers/mmberDtls.controllers.js"


const memberRouter = express(Router)
memberRouter.post("/details",MembersDetailsController)

export default memberRouter