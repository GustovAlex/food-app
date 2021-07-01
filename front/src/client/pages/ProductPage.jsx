import { useSelector } from "react-redux"
import ProductListContainer from "../components/product/ProductListContainer"

export default function ProductPage(props) {
    const { categoriesList } = useSelector((state) => state.data)
    const { categoryId } = props.match.params
    const category = categoriesList.find(
        (category) => `${category._id}` === categoryId
    )
    console.log("categoryId", categoryId)
    return <ProductListContainer category={category} />
}
