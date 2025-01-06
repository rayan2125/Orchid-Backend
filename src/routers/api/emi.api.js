import express, { Router } from "express"
import { CreateEmi } from "../../controllers/emi.controller.js"

const emiRouter =  express(Router)

emiRouter.post("/create",CreateEmi)

export default emiRouter