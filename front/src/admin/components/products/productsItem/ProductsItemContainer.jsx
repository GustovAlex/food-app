import { useState } from "react"
import { useDispatch } from "react-redux"
import ProductsItem from "./ProductsItem"
import { deleteProduct, updateProduct } from "../../../redux/actions/product"
import {
    deleteCategoryImg,
    addCategoryImg,
} from "../../../redux/actions/category"

export default function ProductsItemContainer({ product }) {
    console.log("product", product)
    const dispatch = useDispatch()
    const productId = product._id
    const categoryId = product.categoryId
    const targetProductName = product.name
    const imgName = product.img
    const [open, setOpen] = useState(false)
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const [productName, setProductName] = useState(
        !!product.name ? product.name : ""
    )
    const [productIngredients, setProductIngredients] = useState(
        !!product.ingredients ? product.ingredients : ""
    )
    const [productPrice, setProductPrice] = useState(
        !!product.price ? product.price : ""
    )
    const [isNew, setIsNew] = useState(
        product?.isNewProduct ? product?.isNewProduct : false
    )
    const [isPromotion, setIsPromotion] = useState(
        product?.isPromotionProduct ? product?.isPromotionProduct : false
    )

    console.log("isNew", isNew)
    console.log("isPromotion", isPromotion)

    const [file, setFile] = useState("")
    const [fileName, setFileName] = useState(!!imgName ? imgName : "")
    const [src, setSrc] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    console.log("fileName IU", fileName)
    console.log("src IU", src)

    const onChangeFile = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
        setSrc(URL.createObjectURL(e.target.files[0]))
    }

    const onSubmitImg = (e) => {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("fileName", fileName)
        e.preventDefault()
        dispatch(addCategoryImg({ formData }))
        setFileName(fileName)
        setSuccessMessage("image was added")
    }

    const handleOpenClose = () => setOpen(!open)

    const onClickUpdateProduct = () => {
        dispatch(
            updateProduct({
                productId,
                productName,
                productIngredients,
                productPrice,
                fileName,
                categoryId,
                isNew,
                isPromotion,
            })
        )
        handleOpenClose()
    }

    const onChangeProductName = (e) => setProductName(e.target.value)
    const onChangeProductIngredients = (e) =>
        setProductIngredients(e.target.value)
    const onChangeProductPrice = (e) => setProductPrice(e.target.value)
    const handleChangeIsNew = (event) => {
        setIsNew(event.target.checked)
    }
    const handleChangeIsPromotion = (event) => {
        setIsPromotion(event.target.checked)
    }

    const handleOpenCloseConfirmModal = () => {
        setOpenConfirmModal(!openConfirmModal)
    }

    const onClickDeleteProduct = () => {
        dispatch(deleteProduct(productId))
        dispatch(deleteCategoryImg(fileName))
    }

    return (
        <ProductsItem
            product={product}
            open={open}
            openConfirmModal={openConfirmModal}
            handleOpenCloseConfirmModal={handleOpenCloseConfirmModal}
            handleOpenClose={handleOpenClose}
            onClickDeleteProduct={onClickDeleteProduct}
            targetProductName={targetProductName}
            productName={productName}
            productIngredients={productIngredients}
            productPrice={productPrice}
            fileName={fileName}
            onChangeProductName={onChangeProductName}
            onChangeProductIngredients={onChangeProductIngredients}
            onChangeProductPrice={onChangeProductPrice}
            onClickUpdateProduct={onClickUpdateProduct}
            src={src}
            onChangeFile={onChangeFile}
            onSubmitImg={onSubmitImg}
            successMessage={successMessage}
            isNew={isNew}
            isPromotion={isPromotion}
            handleChangeIsNew={handleChangeIsNew}
            handleChangeIsPromotion={handleChangeIsPromotion}
        />
    )
}
