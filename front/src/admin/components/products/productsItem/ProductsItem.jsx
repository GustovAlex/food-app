import useStyles from "./productsItemStyles"
import Modal from "../../common/modal/Modal"
import ConfirmModal from "../../common/confirmModal/ConfirmModal"
import Button from "../../common/button/Button"

export default function ProductsItem({
    product,
    open,
    openConfirmModal,
    handleOpenCloseConfirmModal,
    handleOpenClose,
    targetProductName,
    productName,
    fileName,
    onChangeProductName,
    src,
    onChangeFile,
    successMessage,
}) {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.productItemContent}>
                {!!product.img ? (
                    <img
                        className={classes.productItemImg}
                        src={`/img/${product.img}`}
                        alt={product.name}
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
                        <Button text='update' onClick={handleOpenClose} />
                    </div>
                    <div className={classes.productItemButtonsItem}>
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
                // onClickDeleteCategory={onClickDeleteCategory}
                titleName={`${targetProductName} product`}
            />
            <Modal
                open={open}
                handleOpenClose={handleOpenClose}
                title='update product'
                productName={productName}
                fileName={fileName}
                onchangeInput={onChangeProductName}
                // onClick={onClickUpdateCategory}
                onChangeFile={onChangeFile}
                // onSubmitImg={onSubmitImg}
                src={src}
                successMessage={successMessage}
                lable='product'
            />
        </div>
    )
}
