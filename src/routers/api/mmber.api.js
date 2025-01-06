import express, { Router } from "express"
import { DeletMember, MembersDetailsController, UpdateMember, ViewMember } from "../../controllers/mmberDtls.controllers.js"


const memberRouter = express(Router)
memberRouter.post("/details", MembersDetailsController)
memberRouter.get("/memberView", ViewMember)
memberRouter.put("/:id", UpdateMember)
memberRouter.delete("/:id", DeletMember)

export default memberRouter