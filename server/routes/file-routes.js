const Router = require('express')
const router = new Router()
const { passport, useAdminMiddleWare } = require("../middleware/index")
const {
	addFile,
  } = require("../controllers/file-controllers");

router.post("/file", useAdminMiddleWare(), addFile);

module.exports = router