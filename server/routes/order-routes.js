const Router = require("express")
const { passport, useAdminMiddleWare } = require("../middleware");
const {
	addOrder,
	// getOrder,
	// deleteOrder,
} = require("../controllers/order-controllers")

const router = Router();

router.post("/order", useAdminMiddleWare(), addOrder);
// router.get("/order", getOrder);
// router.delete("/order/:id", useAdminMiddleWare(), deleteOrder);

module.exports = router;