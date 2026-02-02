// routes for products api

const router = require('express').Router();
const ctrl = require("../controllers/orderController")

router.post("/", ctrl.);
router.get("/",ctrl.);
router.get("/:id" , ctrl.);
router.put("/:id", ctrl.);
router.delete("/:id", ctrl.);

module.exports = router;