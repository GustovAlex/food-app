import { Divider } from "@material-ui/core"
import useStyles from "./productsItemStyles"
import Modal from "../../common/modal/Modal"
import ConfirmModal from "../../common/confirmModal/ConfirmModal"
import Button from "../../common/button/Button"

export default function ProductsItem({ product }) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.productItemContent}>
                {!!product.img ? (
                    <img
                        className={classes.productItemImg}
                        src={`/productImg/${product.img}`}
                        alt='burger'
                    />
                ) : (
                    <p className={classes.productNoPhoto}>no photo</p>
                )}
                <div className={classes.productInfoWrap}>
                    <div className={classes.productInfo}>
                        <p className={classes.productItemName}>
                            {product.name}
                        </p>
                        <p className={classes.productPrice}>
                            {product.price} $
                        </p>
                    </div>

                    <p className={classes.productIngredients}>
                        {product.ingredients}
                    </p>
                </div>

                <div className={classes.productItemButtons}>
                    <div className={classes.productItemButtonsItem}>
                        <Button
                            text='update'
                            // onClick={handleOpenClose}
                        />
                    </div>
                    <div className={classes.productItemButtonsItem}>
                        <Button
                            text='delete'
                            // onClick={handleOpenCloseConfirmModal}
                        />
                    </div>
                </div>
            </div>
            <ConfirmModal
            // openConfirmModal={openConfirmModal}
            // handleOpenCloseConfirmModal={handleOpenCloseConfirmModal}
            // onClickDeleteCategory={onClickDeleteCategory}
            // titleName={`${targetCategoryName} category`}
            />
            <Modal
            // open={open}
            // handleOpenClose={handleOpenClose}
            // title='update category'
            // categoryName={categoryName}
            // fileName={fileName}
            // onchangeInput={onChangeCategoryName}
            // onClick={onClickUpdateCategory}
            // onChangeFile={onChangeFile}
            // onSubmitImg={onSubmitImg}
            // src={src}
            // successMessage={successMessage}
            />
        </div>
    )
}
