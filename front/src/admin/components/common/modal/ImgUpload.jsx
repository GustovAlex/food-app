import { Fragment } from "react"
import { TextField, Button } from "@material-ui/core"
import useStyles from "./modalStyles"

export default function ImgUpload({
    fileName,
    src,
    onChangeFile,
    onSubmitImg,
    successMessage,
}) {
    const classes = useStyles()
    return (
        <div>
            <Fragment>
                {src || fileName ? (
                    <div className={classes.imgUploadwrap}>
                        <img
                            className={classes.imgUploadImg}
                            src={src ? src : `/img/${fileName}`}
                            alt='img'
                        />
                    </div>
                ) : (
                    <div className={classes.imgUploadwrap}>
                        <p className={classes.imgUploadNoImg}>no img</p>
                    </div>
                )}
                <p className={classes.imgUploadSuccessMessage}>
                    {!!successMessage ? successMessage : null}
                </p>
                <form onSubmit={onSubmitImg}>
                    <div className={classes.imgUploadWrap}>
                        <label className={classes.lableImg} htmlFor='image'>
                            {!!fileName ? fileName : "add img"}
                        </label>
                        <TextField
                            className={classes.imgUploadInput}
                            id='image'
                            variant='outlined'
                            size='small'
                            type='file'
                            accept='.jpg, .jpeg, .png, .svg'
                            onChange={onChangeFile}
                        />
                        <Button
                            className={classes.imgUploadButton}
                            variant='outlined'
                            color='primary'
                            type='submit'
                            value='upload'>
                            Add image
                        </Button>
                    </div>
                </form>
            </Fragment>
        </div>
    )
}
