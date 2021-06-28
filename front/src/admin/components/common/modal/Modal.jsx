import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import useStyles from "./modalStyles"
import Input from "../input/Input"
import Button from "../button/Button"
import ImgUpload from "./ImgUpload"
import Switch from "../switch/Switch"

export default function TransitionsModal({
    open,
    handleOpenClose,
    title,
    onChangeCategoryName,
    onChangeProductName,
    onChangeProductIngredients,
    onChangeProductPrice,
    onClick,
    fileName,
    src,
    onChangeFile,
    onSubmitImg,
    successMessage,
    categoryName,
    productName,
    productIngredients,
    productPrice,
    lable,
    isNew,
    isPromotion,
    handleChangeIsNew,
    handleChangeIsPromotion,
}) {
    const classes = useStyles()

    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleOpenClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>{title}</h2>
                        <ImgUpload
                            fileName={fileName}
                            src={src}
                            onChangeFile={onChangeFile}
                            onSubmitImg={onSubmitImg}
                            successMessage={successMessage}
                        />
                        <div className={classes.modalInput}>
                            <Input
                                lable={`${lable} name`}
                                onChange={
                                    lable === "category"
                                        ? onChangeCategoryName
                                        : onChangeProductName
                                }
                                value={categoryName || productName}
                                defaultValue={categoryName || productName}
                            />
                            {lable === "product" ? (
                                <div>
                                    <div className={classes.modalInput}>
                                        <Input
                                            lable={`${lable} ingredients`}
                                            onChange={
                                                onChangeProductIngredients
                                            }
                                            value={productIngredients}
                                            defaultValue={productIngredients}
                                        />
                                    </div>
                                    <div className={classes.modalInput}>
                                        <Input
                                            lable={`${lable} price`}
                                            onChange={onChangeProductPrice}
                                            value={productPrice}
                                            defaultValue={productPrice}
                                        />
                                    </div>
                                    <div className={classes.markers}>
                                        <Switch
                                            title='new'
                                            isMarker={isNew}
                                            onChange={handleChangeIsNew}
                                        />
                                        <Switch
                                            title='Promotion'
                                            isMarker={isPromotion}
                                            onChange={handleChangeIsPromotion}
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                        <div className={classes.modalButton}>
                            <Button text={title} onClick={onClick} />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
