import useStyles from "./confirmModalStyles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Button from "../button/Button"

export default function TransitionsModal({
    openConfirmModal,
    handleOpenCloseConfirmModal,
    onClickDeleteCategory,
    onClick,
    titleName,
}) {
    const classes = useStyles()

    return (
        <div>
            <Modal
                className={classes.modal}
                open={openConfirmModal}
                onClose={handleOpenCloseConfirmModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={openConfirmModal}>
                    <div className={classes.paper}>
                        <h2>
                            do you want to delete the <br />{" "}
                            <span className={classes.categoryName}>
                                {titleName}
                            </span>
                            ?
                        </h2>
                        <div className={classes.buttonWrap}>
                            <div className={classes.button}>
                                <Button text='yes' onClick={onClick} />
                            </div>
                            <div className={classes.button}>
                                <Button
                                    text='cancel'
                                    onClick={handleOpenCloseConfirmModal}
                                />
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
