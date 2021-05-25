import useStyles from './titleStyles'
import Button from '../button/Button'
import Paper from '@material-ui/core/Paper';
import CategoriesModal from '../../categories/categoriesModal/CategoriesModal'


export default function Title ({titleText, 
	buttonText,
	open,
	handleOpenClose,
	onchangeInput,
	onClickAddCategory,
	fileName,
	src,
	onChangeFile,
	onSubmitImg,
	successMessage
}) {
	const classes = useStyles()
	

	return (
		<div>
			<Paper elevation={3} className={classes.categoriesTitleWrap}>
				<h3 className={classes.title} > {titleText} </h3>
				<Button text={buttonText} 
				onClick={handleOpenClose}
				/>
			</Paper>
			<CategoriesModal open={open}
			handleOpenClose={handleOpenClose}
			title="add category"
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