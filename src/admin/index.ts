import { Router } from "express";
const router = Router();
import isAdmin from "../middlewares/isAdmin";
import productRoute from "./routes/product.route";

router.use("/products", isAdmin, productRoute);

import categoryRoute from "./routes/category.route";
router.use("/categories", isAdmin, categoryRoute);

import colorRoute from "./routes/color.route";
router.use("/colors", isAdmin, colorRoute);

import inventoryRoute from "./routes/inventory.route";
router.use("/inventories", isAdmin, inventoryRoute);

import orderRoute from "./routes/order.route";
router.use("/orders", isAdmin, orderRoute);

import orderItemsRoute from "./routes/orderItems.route";
router.use("/orderItems", isAdmin, orderItemsRoute);

import paymentRoute from "./routes/payment.route";
router.use("/payments", isAdmin, paymentRoute);

import cartRoute from "./routes/cart.route";
router.use("/carts", isAdmin, cartRoute);

import userRoute from "./routes/user.route";
router.use("/users", isAdmin, userRoute);

import addressRoute from "./routes/address.route";
router.use("/addresses", isAdmin, addressRoute);

import commentRoute from "./routes/comment.route";
router.use("/comments", isAdmin, commentRoute);

import likeRoute from "./routes/likes.route";
router.use("/likes", isAdmin, likeRoute);

export default router;
