const express = require("express");
const { body } = require("express-validator");

const checkTokenMiddleware = require("../middlewares/isLogin");
const productController = require("../controllers/product");

const router = express.Router();

// POST /create-product
router.post(
  "/create-product",
  checkTokenMiddleware,
  [
    body("product_name")
      .trim()
      .notEmpty()
      .withMessage("Product name is required!!!"),
    body("product_description")
      .trim()
      .notEmpty()
      .withMessage("Product description is required!!!"),
    body("product_price")
      .trim()
      .notEmpty()
      .withMessage("Product price is required"),
    body("product_category")
      .trim()
      .notEmpty()
      .withMessage("Product category is required"),
    body("product_used_on")
      .trim()
      .notEmpty()
      .withMessage("Product usedOn is required"),
    body("product_details")
      .isArray()
      .withMessage("Product details must be array"),
  ],
  productController.createProduct
);

// GET /products
router.get("/products", checkTokenMiddleware, productController.getAllProducts);

// GET /product/:id
router.get(
  "/product/:id",
  checkTokenMiddleware,
  productController.getOldDataProduct
);

// POST /update-product
router.post(
  "/update-product",
  checkTokenMiddleware,
  [
    body("product_name")
      .trim()
      .notEmpty()
      .withMessage("Product name is required!!!"),
    body("product_description")
      .trim()
      .notEmpty()
      .withMessage("Product description is required!!!"),
    body("product_price")
      .trim()
      .notEmpty()
      .withMessage("Product price is required"),
    body("product_category")
      .trim()
      .notEmpty()
      .withMessage("Product category is required"),
    body("product_used_on")
      .trim()
      .notEmpty()
      .withMessage("Product usedOn is required"),
    body("product_details")
      .isArray()
      .withMessage("Product details must be array"),
  ],
  productController.updateProduct
);

// DELETE /product/:id
router.delete(
  "/product/:id",
  checkTokenMiddleware,
  productController.deleteProduct
);

// POST /upload-image
router.post(
  "/upload-image",
  checkTokenMiddleware,
  productController.uploadProductImages
);

// GET /product-images/:id
router.get("/product-images/:id", checkTokenMiddleware, productController.getProductImage);

// DELETE /product/images/destroy/:productId/:imgDelUrl
router.delete("/product/images/destroy/:productId/:imgDelUrl", checkTokenMiddleware, productController.deleteSavedProductImages)

module.exports = router;
