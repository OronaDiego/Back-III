import { Router } from "express";
import { productController } from "../controllers/product-controllers";
import {
  validateGetProduct,
  validatePostProduct,
} from "../middlewares/validators/product-validator";

const router = Router();

router.get("/", productController.getAll);
router.get("/:id", [validateGetProduct], productController.getById);
router.post("/", [validatePostProduct], productController.create);
router.put(
  "/:id",
  [validateGetProduct, validatePostProduct],
  productController.update
);
router.delete("/:id", [validateGetProduct], productController.delete);

export default router;
