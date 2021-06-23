import { useState } from "react"
import Title from "./Title"
import { addCategory, addCategoryImg } from "../../../redux/actions/category"
import { useDispatch } from "react-redux"

export default function TitleContainer({
    titleText,
    buttonText,
    options,
    onClickSetCategoryId,
}) {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [categoryName, setCategoryName] = useState("")
    const [file, setFile] = useState("")
    const [fileName, setFileName] = useState("")
    const [src, setSrc] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

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
        dispatch(addCategory({ categoryName, fileName }))
        handleOpenClose()
    }

    const onChangeCategoryName = (e) => setCategoryName(e.target.value)

    return (
        <Title
            titleText={titleText}
            buttonText={buttonText}
            open={open}
            handleOpenClose={handleOpenClose}
            onchangeInput={onChangeCategoryName}
            onClickAddCategory={onClickAddCategory}
            fileName={fileName}
            src={src}
            onChangeFile={onChangeFile}
            onSubmitImg={onSubmitImg}
            successMessage={successMessage}
            options={options}
            onClickSetCategoryId={onClickSetCategoryId}
        />
    )
}
