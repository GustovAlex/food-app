import useStyles from './productStyles'
import TitleContainer from '../utils/title/TitleContainer'

export default function Products () {
	const classes = useStyles()

	return (
		<div>
			<TitleContainer  titleText="List of Products:"
			buttonText="add product"
			/>
		</div>
	)
}