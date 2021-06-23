import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	categoriesTitleWrap: {
		backgroundColor: '#fff',
		width: '100vw',
		maxWidth: '1200px',
		display: 'flex',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
		padding: '10px 20px',
	},
		title: {
			marginTop: '10px',
			textTransform: 'uppercase',
			color: "#184653", 
		}
	}));

export default useStyles;