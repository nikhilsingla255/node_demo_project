// routes for products api

const router = require('express').Router();
const ctrl = require("../controllers/productController")

router.post("/", ctrl.createProduct);
router.get("/",ctrl.getProducts);
router.get("/:id" , ctrl.getProduct);
router.put("/:id", ctrl.updateProducts);
router.delete("/:id", ctrl.deleteProducts);

module.exports = router;