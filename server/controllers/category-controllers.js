const Category = require("../models/Category-model")
const Admin = require("../models/Admin-model")

const addCategory = async (req, res) => {
    try {
        const { name, img } = req.body

        const category = await new Category({
            name,
            img,
            product: [],
        })

        await category.save()

        const admin = await Admin.findById(req.user._id)
        admin.category.push(category._id)
        await admin.save()

        return res.json({ category, message: "categoty was added" })
    } catch (e) {
        console.log(e)
        res.json({ e: e, message: "something wrong" })
    }
}

const getCategory = async (req, res) => {
    try {
        const categoriesList = await Category.find().populate({
            path: "product",
            model: "Product",
        })

        return res.json({ categoriesList })
    } catch (e) {
        console.log(e)
        res.json({ message: "something wrong" })
    }
}

const getData = async (req, res) => {
    try {
        const admin = await Admin.findById({ _id: req.user._id })
            .populate({
                path: "category",
                model: "Сategory",
                populate: {
                    path: "product",
                    model: "Product",
                },
            })
            .populate({
                path: "order",
                model: "Order",
                populate: {
                    path: "product",
                    model: "Product",
                },
            })

        const adminData = {
            categories: admin.category,
            orders: admin.order,
        }

        return res.json({
            adminData,
        })
    } catch (e) {
        console.log(e)
        res.send({ message: "Server error" })
    }
}

const updateCategory = async (req, res) => {
    try {
        const { name, img } = req.body
        const { id } = req.params

        const category = await Category.findByIdAndUpdate(
            { _id: id },
            {
                name,
                img,
            },
            { new: true }
        )

        return res.json({ category, message: "category was updated" })
    } catch (e) {
        console.log(e)
        res.json({ message: "something wrong" })
    }
}

const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id)

        const admin = await Admin.findById(req.user._id)
        await admin.category.splice(admin.category.indexOf(req.params.id), 1)
        await admin.save()

        return res.json({ message: "Category was deleted" })
    } catch (e) {
        console.log(e)
        res.json({ message: "something wrong" })
    }
}

module.exports = {
    addCategory,
    getCategory,
    updateCategory,
    deleteCategory,
}
