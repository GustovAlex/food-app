import useStyles from './inputStyles'
import TextField from '@material-ui/core/TextField';

export default function Input ({lable, onChange, onBlur, value}) {
	const classes = useStyles();

	return (
		<TextField 
		className={classes.input}
		noValidate
		onChange={onChange}
		onBlur={onBlur}
		autoComplete="off" 
		id="outlined-basic" 
		label={lable} 
		variant="outlined" 
		size="small"
		defaultValue={!!value ? value : ''}
		/>
	)
}