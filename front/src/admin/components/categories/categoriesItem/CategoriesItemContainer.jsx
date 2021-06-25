import { useState } from "react"
import CategoriesItem from "./CategoriesItem"
import {
    deleteCategory,
    updateCategory,
    addCategoryImg,
    deleteCategoryImg,
} from "../../../redux/actions/category"
import { useDispatch } from "react-redux"

export default function CategoriesItemContainer({ category }) {
    const dispatch = useDispatch()
    const categoryId = category._id
    const targetCategoryName = category.name
    const imgName = category.img
    const [open, setOpen] = useState(false)
    const [openConfirmModal, setOpenConfirmModal] = useState(false)
    const [categoryName, setCategoryName] = useState(
        !!targetCategoryName ? targetCategoryName : ""
    )
    const [file, setFile] = useState("")
    const [fileName, setFileName] = useState(!!imgName ? imgName : "")
    const [src, setSrc] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    console.log("fileName", fileName)
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

    const onClickUpdateCategory = () => {
        dispatch(updateCategory({ categoryId, categoryName, fileName }))
        handleOpenClose()
    }

    const onChangeCategoryName = (e) => setCategoryName(e.target.value)

    const handleOpenCloseConfirmModal = () => {
        setOpenConfirmModal(!openConfirmModal)
    }

    const onClickDeleteCategory = (e) => {
        dispatch(deleteCategory(categoryId))
        // const formData = new FormData()
        // formData.append("file", file)
        // formData.append("fileName", fileName)
        // e.preventDefault()
        console.log("fileName", fileName)
        dispatch(deleteCategoryImg(fileName))
    }

    return (
        <CategoriesItem
            category={category}
            open={open}
            openConfirmModal={openConfirmModal}
            handleOpenCloseConfirmModal={handleOpenCloseConfirmModal}
            handleOpenClose={handleOpenClose}
            onClickDeleteCategory={onClickDeleteCategory}
            targetCategoryName={targetCategoryName}
            categoryName={categoryName}
            fileName={fileName}
            onChangeCategoryName={onChangeCategoryName}
            onClickUpdateCategory={onClickUpdateCategory}
            src={src}
            onChangeFile={onChangeFile}
            onSubmitImg={onSubmitImg}
            successMessage={successMessage}
        />
    )
}
