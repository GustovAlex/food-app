import useStyles from "./categoriesItemStyles"
import Button from "../../common/button/Button"
import Modal from "../../common/modal/Modal"
import ConfirmModal from "../../common/confirmModal/ConfirmModal"

export default function CategoriesItem({
    category,
    open,
    handleOpenClose,
    onClickDeleteCategory,
    openConfirmModal,
    handleOpenCloseConfirmModal,
    targetCategoryName,
    categoryName,
    fileName,
    onChangeCategoryName,
    onClickUpdateCategory,
    onChangeFile,
    onSubmitImg,
    src,
    successMessage,
}) {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.categoriesItemContent}>
                {!!category.img ? (
                    <img
                        className={classes.categoriesItemImg}
                        src={`/img/${category.img}`}
                        alt='burger'
                    />
                ) : (
                    <p className={classes.categoriesNoPhoto}>no photo</p>
                )}
                <p className={classes.categoriesItemName}>{category.name}</p>
                <p className={classes.categoriesItemName}>
                    {category.product.length}
                    {category.product.length === 1
                        ? " product in category"
                        : " products in category"}{" "}
                </p>
                <div className={classes.categoriesItemButtons}>
                    <div className={classes.categoriesItemButtonsItem}>
                        <Button text='update' onClick={handleOpenClose} />
                    </div>
                    <div className={classes.categoriesItemButtonsItem}>
                        <Button
                            text='delete'
                            onClick={handleOpenCloseConfirmModal}
                        />
                    </div>
                </div>
            </div>
            <ConfirmModal
                openConfirmModal={openConfirmModal}
                handleOpenCloseConfirmModal={handleOpenCloseConfirmModal}
                onClick={onClickDeleteCategory}
                titleName={`${targetCategoryName} category`}
            />
            <Modal
                open={open}
                handleOpenClose={handleOpenClose}
                title='update category'
                categoryName={categoryName}
                fileName={fileName}
                onChangeCategoryName={onChangeCategoryName}
                onClick={onClickUpdateCategory}
                onChangeFile={onChangeFile}
                onSubmitImg={onSubmitImg}
                src={src}
                successMessage={successMessage}
                lable='category'
            />
        </div>
    )
}
