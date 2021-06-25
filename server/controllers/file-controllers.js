const addFile = (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: "no file uploaded" })
    }
    const file = req.files.file
    file.mv(
        `C:/Users/Dimitr/Desktop/food app/front/public/img/${file.name}`,
        (err) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.json({
                fileName: file.name,
                filePath: `img/${file.name}`,
            })
        }
    )
}

const deleteFile = (req, res) => {
    const fileName = req.body.fileName
    if (!req.body.fileName) {
        return res.status(400).json({ msg: "wrong file name" })
    }
    // console.log(req.body.fileName)
    const file = require("fs")

    file.unlink(
        `C:/Users/Dimitr/Desktop/food app/front/public/img/${req.body.fileName}`,
        (err) => {
            if (err) {
                console.log("at here")
                return res.json({
                    e: err,
                    message: `no file ${fileName} in the specified directory`,
                })
            }
            return res.json({
                message: `image ${fileName} was delete`,
            })
        }
    )
}

module.exports = {
    addFile,
    deleteFile,
}
