import { Router } from "express";
const router = Router();
import productController from "../controllers/product.controller";

router.get("/", productController.getAllProduct);
router.get("/getById/:productId", productController.getProductByIdRoute);
router.get("/getByFilter", productController.getByFilterRoute);

export default router;