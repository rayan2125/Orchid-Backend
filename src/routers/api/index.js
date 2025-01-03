import express from "express"
import memberRouter from "./mmber.api.js"


const routers = express.Router()
routers.use("/member",memberRouter)

export default routers