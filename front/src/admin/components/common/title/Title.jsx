import useStyles from "./titleStyles"
import Button from "../button/Button"
import Paper from "@material-ui/core/Paper"
import CategoriesModal from "../modal/Modal"
import Select from "../select/Select"

export default function Title({
    titleText,
    buttonText,
    open,
    handleOpenClose,
    onchangeInput,
    onClickAddCategory,
    fileName,
    src,
    onChangeFile,
    onSubmitImg,
    successMessage,
    options,
    onClickSetCategoryId,
}) {
    const classes = useStyles()

    return (
        <div>
            <Paper elevation={3} className={classes.categoriesTitleWrap}>
                <h3 className={classes.title}> {titleText} </h3>
                {options ? (
                    <Select
                        options={options}
                        onClickSetCategoryId={onClickSetCategoryId}
                    />
                ) : null}

                <Button text={buttonText} onClick={handleOpenClose} />
            </Paper>

            <CategoriesModal
                open={open}
                handleOpenClose={handleOpenClose}
                title='add category'
                onchangeInput={onchangeInput}
                onClick={onClickAddCategory}
                fileName={fileName}
                src={src}
                onChangeFile={onChangeFile}
                onSubmitImg={onSubmitImg}
                successMessage={successMessage}
            />
        </div>
    )
}
