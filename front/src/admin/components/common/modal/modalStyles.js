import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        outline: "none",
        boxShadow: "none",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: "400px",
        border: "none",
        boxShadow: "none",
        outline: "none",
        textAlign: "center",
        padding: "50px 0",
        textTransform: "uppercase",
    },
    modalInput: {
        paddingTop: "30px",
    },
    modalButton: {
        paddingTop: "30px",
        width: "300px",
        margin: "0 auto",
    },
    imgUploadNoImg: {
        paddingTop: "40px",
    },
    imgUploadwrap: {
        marginTop: "30px",
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        border: "3px solid #FF8302",
        margin: "0 auto",
    },
    imgUploadImg: {
        paddingTop: "15px",
        textAlign: "center",
        height: "70px",
        width: "70px",
    },
    imgUploadInput: {
        width: "300px",
        display: "none",
    },
    imgUploadWrap: {
        display: "flex",
        justifyContent: "space-between",
        width: "300px",
        margin: "0 auto",
        // paddingTop: "30px",
    },
    lableImg: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        display: "block",
        overflow: "hidden",
        textAlign: "start",
        width: "130px",
        fontWeight: "400",
        color: "rgb(118, 118, 118)",
        border: "solid 1px rgb(223, 223, 223)",
        borderRadius: "4px",
        padding: "10.5px 14px",
        "&:hover": {
            border: "solid 1px rgb(59, 59, 59)",
            cursor: "pointer",
        },
    },
    imgUploadSuccessMessage: {
        fontSize: "14px",
        paddingTop: "30px",
        color: "#FF8302",
    },
    markers: {
        display: "flex",
        justifyContent: "space-between",
        width: "300px",
        margin: "0 auto",
        paddingTop: "30px",
    },
}))

export default useStyles
