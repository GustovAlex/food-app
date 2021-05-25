import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	  	button: {
			textAlign: 'center',
			backgroundColor: '#FF8302',
			padding: '10px',
			borderRadius: '6px',
			color: "#262626",
			textTransform: 'uppercase',
			fontWeight: '900',
			cursor: 'pointer',
			boxSizing: 'border-box',
			display: 'block',
			height: '40px',
			transition: 'background .2s ease-in',
			"&:hover": {
				backgroundColor: '#FFA03E',
			},
	  },
	}));

export default useStyles;