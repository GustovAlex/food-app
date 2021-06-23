import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    productItemContent: {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid #FF8302",
        padding: "10px 0",
        textTransform: "uppercase",
    },
    productItemImg: {
        height: "50px",
        width: "50px",
    },
    productNoPhoto: {
        marginTop: "15px",
    },
    productInfoWrap: {
        width: "300px",
    },
    productInfo: {
        display: "flex",
        justifyContent: "space-between",
    },
    productItemName: {
        // width: "40px",
        color: "#FF8302",
        fontWeight: 600,
        fontSize: "18px",
    },
    productIngredients: {
        fontSize: "12px",
    },
    productPrice: {
        // marginRight: "80px",
        color: "#FF8302",
        fontWeight: 600,
        fontSize: "18px",
    },
    productItemButtons: {
        display: "flex",
        marginLeft: "40px",
    },
    productItemButtonsItem: {
        marginLeft: "40px",
    },
}))

export default useStyles
