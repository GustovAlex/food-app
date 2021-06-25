import { useState } from "react"
import { useDispatch } from "react-redux"
import ProductsItem from "./ProductsItem"

export default function ProductsItemContainer({ product }) {
    console.log("product", product)
    const dispatch = useDispatch()
    const productId = product._id
    const targetProductName = product.name
    const imgName = product.img
    const [open, setOpen] = useState(false)
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const [productName, setProductName] = useState(
        !!targetProductName ? targetProductName : ""
    )
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

    // const onSubmitImg = (e) => {
    //     const formData = new FormData()
    //     formData.append("file", file)
    //     formData.append("fileName", fileName)
    //     e.preventDefault()
    //     dispatch(addCategoryImg({ formData }))
    //     setFileName(fileName)
    //     setSuccessMessage("image was added")
    // }

    const handleOpenClose = () => setOpen(!open)

    // const onClickUpdateCategory = () => {
    //     dispatch(updateCategory({ categoryId, categoryName, fileName }))
    //     handleOpenClose()
    // }

    const onChangeProductName = (e) => setProductName(e.target.value)

    const handleOpenCloseConfirmModal = () => {
        setOpenConfirmModal(!openConfirmModal)
    }

    // const onClickDeleteCategory = () => dispatch(deleteProduct(productId))
    return (
        <ProductsItem
            product={product}
            open={open}
            openConfirmModal={openConfirmModal}
            handleOpenCloseConfirmModal={handleOpenCloseConfirmModal}
            handleOpenClose={handleOpenClose}
            // onClickDeleteCategory={onClickDeleteCategory}
            targetProductName={targetProductName}
            productName={productName}
            fileName={fileName}
            onChangeProductName={onChangeProductName}
            // onClickUpdateCategory={onClickUpdateCategory}
            src={src}
            onChangeFile={onChangeFile}
            // onSubmitImg={onSubmitImg}
            successMessage={successMessage}
        />
    )
}
