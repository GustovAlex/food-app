const Router = require("express")
const router = new Router()
const { passport, useAdminMiddleWare } = require("../middleware/index")
const { addFile, deleteFile } = require("../controllers/file-controllers")

router.post("/file", useAdminMiddleWare(), addFile)
router.post("/file/delete", useAdminMiddleWare(), deleteFile)

module.exports = router
