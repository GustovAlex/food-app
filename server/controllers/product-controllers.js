const Product = require("../models/Product-model")
const Admin = require("../models/Admin-model")
const Category = require("../models/Category-model")

const addProduct = async (req, res) => {
    try {
        const {
            name,
            ingredients,
            price,
            img,
            categoryId,
            isNewProduct,
            isPromotionProduct,
        } = req.body

        const product = await new Product({
            name,
            ingredients,
            price,
            img,
            categoryId,
            isNewProduct,
            isPromotionProduct,
        })

        await product.save()

        const category = await Category.findById(categoryId)
        category.product.push(product._id)
        await category.save()

        return res.json({ product, message: "product was added" })
    } catch (e) {
        console.log(e)
        res.json({ e: e, message: "something wrong" })
    }
}

const getProduct = async (req, res) => {
    try {
        const productList = await Product.find()
        return res.json({ productList })
    } catch (e) {
        console.log(e)
        res.json({ message: "something wrong" })
    }
}

const updateProduct = async (req, res) => {
    try {
        const {
            name,
            ingredients,
            price,
            img,
            categoryId,
            isNewProduct,
            isPromotionProduct,
        } = req.body
        const { id } = req.params

        console.log("req.params", id)

        const product = await Product.findByIdAndUpdate(
            { _id: id },
            {
                name,
                ingredients,
                price,
                img,
                categoryId,
                isNewProduct,
                isPromotionProduct,
            },
            { new: true }
        )

        return res.json({ product, message: "category was updated" })
    } catch (e) {
        console.log(e)
        res.json({ message: "something wrong" })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        await Product.findByIdAndDelete(req.params.id)
        const category = await Category.findById(product.categoryId)
        await category.product.splice(
            category.product.indexOf(product.categoryId),
            1
        )
        await category.save()

        return res.json({ message: "Product was deleted" })
    } catch (e) {
        console.log(e)
        res.json({ message: "something wrong" })
    }
}

module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
}
