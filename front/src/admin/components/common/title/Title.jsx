import useStyles from "./titleStyles"
import Button from "../button/Button"
import Paper from "@material-ui/core/Paper"
import Modal from "../modal/Modal"
import Select from "../select/Select"

export default function Title({
    titleText,
    buttonText,
    open,
    handleOpenClose,

    onChangeCategoryName,
    onChangeProductName,
    onChangeProductIngredients,
    onChangeProductPrice,

    onClickAddCategory,
    fileName,
    src,
    onChangeFile,
    onSubmitImg,
    successMessage,
    options,
    onClickSetCategoryId,
    lable,
    isNew,
    isPromotion,
    handleChangeIsNew,
    handleChangeIsPromotion,
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

            <Modal
                open={open}
                handleOpenClose={handleOpenClose}
                title={buttonText}
                onChangeCategoryName={onChangeCategoryName}
                onChangeProductName={onChangeProductName}
                onChangeProductIngredients={onChangeProductIngredients}
                onChangeProductPrice={onChangeProductPrice}
                onClick={onClickAddCategory}
                fileName={fileName}
                src={src}
                onChangeFile={onChangeFile}
                onSubmitImg={onSubmitImg}
                successMessage={successMessage}
                lable={lable}
                isNew={isNew}
                isPromotion={isPromotion}
                handleChangeIsNew={handleChangeIsNew}
                handleChangeIsPromotion={handleChangeIsPromotion}
            />
        </div>
    )
}
