import { useSelector, useDispatch } from "react-redux"
import Products from "./Products"
import { setSelectedCategoryId } from "../../redux/actions/product"

export default function ProductsContainer() {
    const dispatch = useDispatch()
    const onClickSetCategoryId = (categoryId) => {
        dispatch(setSelectedCategoryId(categoryId))
    }
    const { categories } = useSelector((state) => state.data.data)
    const { selectedCategoryId } = useSelector(
        (state) => state.selectedCategory
    )

    const selectedCategory = categories.find(
        (category) => category._id === selectedCategoryId
    )

    return (
        <Products
            categoriesList={categories}
            onClickSetCategoryId={onClickSetCategoryId}
            selectedCategory={selectedCategory}
            selectedCategoryId={selectedCategoryId}
        />
    )
}
