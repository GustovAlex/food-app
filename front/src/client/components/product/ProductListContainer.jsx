import ProductList from "./ProductList"
import { useHistory } from "react-router-dom"

export default function ProductListContainer({ category }) {
    const history = useHistory()
    const onClickBackButton = () => {
        history.push("/clien/main")
    }
    return (
        <ProductList
            category={category}
            onClickBackButton={onClickBackButton}
        />
    )
}
