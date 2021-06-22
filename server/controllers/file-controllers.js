const addFile = (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: "no file uploaded" })
    }
    const file = req.files.file
    file.mv(
        `C:/Users/Dimitr/Desktop/food app/front/public/categoriesImg/${file.name}`,
        (err) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.json({
                fileName: file.name,
                filePath: `categoriesImg/${file.name}`,
            })
        }
    )
}

module.exports = {
    addFile,
}
