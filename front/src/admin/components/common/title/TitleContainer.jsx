import { useState } from "react"
import Title from "./Title"
import { addCategory, addCategoryImg } from "../../../redux/actions/category"
import {
    addProduct,
    setSelectedCategoryId,
} from "../../../redux/actions/product"
import { useDispatch } from "react-redux"

export default function TitleContainer({
    titleText,
    buttonText,
    options,
    onClickSetCategoryId,
    lable,
    selectedCategoryId,
}) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [categoryName, setCategoryName] = useState("")
    const [productName, setProductName] = useState("")
    const [productIngredients, setProductIngredients] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [file, setFile] = useState("")
    const [fileName, setFileName] = useState("")
    const [src, setSrc] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [isNew, setIsNew] = useState(false)
    const [isPromotion, setIsPromotion] = useState(false)

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

    const onClickAddCategory = () => {
        !!categoryName
            ? dispatch(addCategory({ categoryName, fileName }))
            : dispatch(
                  addProduct({
                      productName,
                      productIngredients,
                      productPrice,
                      fileName,
                      selectedCategoryId,
                      isNew,
                      isPromotion,
                  })
              )
        handleOpenClose()
    }

    const onChangeCategoryName = (e) => setCategoryName(e.target.value)
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

    return (
        <Title
            titleText={titleText}
            buttonText={buttonText}
            open={open}
            handleOpenClose={handleOpenClose}
            onChangeCategoryName={onChangeCategoryName}
            onChangeProductName={onChangeProductName}
            onChangeProductIngredients={onChangeProductIngredients}
            onChangeProductPrice={onChangeProductPrice}
            onClickAddCategory={onClickAddCategory}
            fileName={fileName}
            src={src}
            onChangeFile={onChangeFile}
            onSubmitImg={onSubmitImg}
            successMessage={successMessage}
            options={options}
            onClickSetCategoryId={onClickSetCategoryId}
            lable={lable}
            isNew={isNew}
            isPromotion={isPromotion}
            handleChangeIsNew={handleChangeIsNew}
            handleChangeIsPromotion={handleChangeIsPromotion}
        />
    )
}
