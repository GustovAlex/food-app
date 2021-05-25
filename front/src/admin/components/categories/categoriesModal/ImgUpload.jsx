import {Fragment} from 'react';
import {TextField, Button} from '@material-ui/core';
import useStyles from './categoriesModalStyles'

export default function ImgUpload({fileName, 
	src, 
	onChangeFile, 
	onSubmitImg, 
	successMessage,
}) {
	const classes = useStyles();
	console.log("fileName", fileName)
	return (
		<div>
			<Fragment>
			{src || fileName ? <div className={classes.imgUploadwrap}> 
						<img className={classes.imgUploadImg} src={src ? src : `/categoriesImg/${fileName}`}  alt="img"/>
					</div> 
			: 	<div className={classes.imgUploadwrap}> 
					<p className={classes.imgUploadNoImg}>no img</p>
				</div>
			}
			<p className={classes.imgUploadSuccessMessage}>
				{!!successMessage ? successMessage : null}
			</p>
				<form onSubmit={onSubmitImg}>
					<div className={classes.imgUploadWrap}>
						<label className={classes.lableImg} htmlFor="avatar">{!!fileName ? fileName : "add img"}</label>  
						<TextField 
						className={classes.imgUploadInput}
						id="avatar"
						variant="outlined"
						size="small"
						type="file"
						accept=".jpg, .jpeg, .png, .svg"
						onChange={onChangeFile}
						/>
						<Button className={classes.imgUploadButton}
						variant="outlined" 
						color="primary"
						type="submit"
						value="upload"
						>
						Add avatar
						</Button>
					
					</div>      
				</form>
			</Fragment>
		</div>
	)
}