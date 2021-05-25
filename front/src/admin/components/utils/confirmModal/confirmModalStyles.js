import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: "none",
		outline: "none",
		boxShadow: "none",
	  },
	  paper: {
		backgroundColor: theme.palette.background.paper,
		width: '400px',
		border: 'none',
		boxShadow: "none",
		outline: "none",
		textAlign: 'center',
		padding: "50px 0",
		textTransform: 'uppercase',
	  },
	  categoryName: {
		color: '#FF8302',
	  },
	  buttonWrap: {
		display: 'flex',
		justifyContent: 'center',
	  },
	  button: {
		width: "100px",
		margin: "30px 15px 0 15px",
	  },
	}));

export default useStyles;