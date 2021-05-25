import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	loginForm: {
		display: 'flex',
		flexWrap: 'wrap',
		textAlign: 'center',
		
		'& > *': {
		  margin: theme.spacing(1),
		  width: "500px",
		  height: "300px",
		  backgroundColor: '#fff',
		},
	  },
	  loginFormTitle: {
		  padding: "20px 0",
		  textAlign: "center",
		  color: "#262626",
		  textTransform: "uppercase",
	  },
	  loginFormInputWrap: {
		  
		  display: 'flex',
		  flexDirection: 'column',
		  alignItems: 'center',
	  },
	  inputItem: {
		  marginBottom: '30px',
		  textTransform: 'uppercase',
	  },
	}));

export default useStyles;