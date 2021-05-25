const Router = require("express")
const { passport, useAdminMiddleWare } = require("../middleware");
const {
	addProduct,
	updateProduct,
	getProduct,
	deleteProduct,
} = require("../controllers/product-controllers")

const router = Router();

router.post("/product", useAdminMiddleWare(), addProduct);
router.put("/product/:id", useAdminMiddleWare(), updateProduct);
router.get("/product", getProduct);
router.delete("/product/:id", useAdminMiddleWare(), deleteProduct);

module.exports = router;