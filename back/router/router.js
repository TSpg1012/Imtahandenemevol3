const router = require("express").Router();
require("dotenv").config();
const controller = require("../controller/controller");

router.get("/", controller.getAllProducts);
router.post("/", controller.getPostProducts);
router.delete("/:id", controller.getdeleteProducts);
router.get("/:id", controller.getProductById);

module.exports = router;
