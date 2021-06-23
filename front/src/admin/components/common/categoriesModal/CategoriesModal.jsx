import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import useStyles from "./categoriesModalStyles"
import Input from "../input/Input"
import Button from "../button/Button"
import ImgUpload from "./ImgUpload"

export default function TransitionsModal({
    open,
    handleOpenClose,
    title,
    onchangeInput,
    onClick,
    fileName,
    src,
    onChangeFile,
    onSubmitImg,
    successMessage,
    categoryName,
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
                                lable={
                                    !!categoryName
                                        ? categoryName
                                        : "category name"
                                }
                                onChange={onchangeInput}
                                value={categoryName}
                            />
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
