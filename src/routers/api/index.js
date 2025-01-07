import express from "express";
import memberRouter from "./mmber.api.js";
import emiRouter from "./emi.api.js";
import paymentRouter from "./payment.api.js";
import productRouter from "./product.api.js";
import membershipProductRouter from "./mmbrPrdt.api.js";
import mmberBookingRouter from "./mmbrBkng.api.js";

const routers = express.Router();

// Array of routes and their respective routers
const routes = [
  { path: "/member", router: memberRouter },
  { path: "/emi", router: emiRouter },
  { path: "/payment", router: paymentRouter },
  { path: "/product", router: productRouter },
  { path: "/mmberPrdt", router: membershipProductRouter },
  { path: "/mmberBkng", router: mmberBookingRouter },
];

// Loop through the routes and apply them to the router
routes.forEach(({ path, router }) => {
  routers.use(path, router);
});

export default routers;
