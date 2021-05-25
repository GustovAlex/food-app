import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbarBackground: {
    background: "#fff",
  },
  navbarContainer: {
    margin: "0 auto",
    maxWidth: "1200px",
    width: "95%",
    justifyContent: "space-between",
    background: "#fff",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  menuNavLinksList: {
    listStyle: "none",
    padding: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#e4f4e4",
  },
  navLinksList: {
    padding: "0",
    minWidth: "700px",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navBarLink: {
    fontFamily: "Arial",
    fontSize: "18px",
    color: "#184653",
    textDecoration: "none",
    textTransform: "capitalize",
    fontWeight: "bold",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "#FF8302",
      transition: "color 0.2s ease-in",
    },
  },
  menuLink: {
    fontSize: "24px",
  },
  selectedNavBarLink: {
    color: "#FF8302",
    transition: "color 0.3s ease-in",
  },
}));

export default useStyles;
