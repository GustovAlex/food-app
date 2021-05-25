const Router = require("express");
const {
  addAdmin,
  loginAdmin,
  getData,
} = require("../controllers/admin-controllers");
const { passport, useAdminMiddleWare } = require("../middleware");

const router = Router();

router.post("/admin/add", addAdmin);
router.post("/admin", loginAdmin);
router.get("/admin", useAdminMiddleWare(), getData);

module.exports = router;