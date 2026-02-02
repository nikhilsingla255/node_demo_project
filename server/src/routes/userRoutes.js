const router = require('express').Router();
const ctrl = require("../controllers/userController");

router.post("/",ctrl.createUser);
router.get("/",ctrl.getAllUsers)
router.get("/active",ctrl.getActiveUsers)
router.post("/deactivate/:id",ctrl.deactivateUsers)
router.post("/email/:email",ctrl.getUserByEmail)

module.exports = router;