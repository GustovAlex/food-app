const Router = require("express")
const { passport, useAdminMiddleWare } = require("../middleware");
const {
	addCategory,
	updateCategory,
	getCategory,
	deleteCategory,
} = require("../controllers/category-controllers")

const router = Router();

router.post("/category", useAdminMiddleWare(), addCategory);
router.put("/category/:id", useAdminMiddleWare(), updateCategory);
router.get("/category", getCategory);
router.delete("/category/:id", useAdminMiddleWare(), deleteCategory);

module.exports = router;