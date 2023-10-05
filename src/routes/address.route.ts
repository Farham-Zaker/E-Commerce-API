import { Router } from "express";
import isLogged from "../middlewares/isLogged";
import addressValidator from "../validators/address.validator";
import validationResults from "../validators/validationResults";
import addressController from "../controllers/address.controller";
const router = Router();

router.post(
  "/add",
  isLogged,
  addressValidator.addUserAddressValidator(),
  validationResults,
  addressController.addUserAddress
);
router.get(
  "/get",
  isLogged,
  addressValidator.getUserAddressesValidator(),
  validationResults,
  addressController.getUserAddresses
);
router.get("/get/:addressId", isLogged, addressController.getAddressById);


export default router;
