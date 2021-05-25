import useStyles from './buttonStyles'

export default function Button({text, onClick}) {
	const classes = useStyles();

	return (
		<div className={classes.button} 
		onClick={onClick}>
			{text}
		</div>
	)
}