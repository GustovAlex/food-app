import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    productsContent: {
        maxWidth: "1200px",
        padding: "10px 20px",
        margin: "3px auto 0 auto",
        backgroundColor: "#fff",
        textAlign: "center",
    },
    productText: {
        color: "#EE1D1D",
        fontSize: "18px",
    },
    categoryName: {
        fontWeight: 900,
        textTransform: "uppercase",
        color: "#FF8302",
    },
}))

export default useStyles
