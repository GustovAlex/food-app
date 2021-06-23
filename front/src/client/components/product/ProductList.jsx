import ProductItem from "./productItem/ProductItem"
import "./productListStyles.scss"

export default function ProductList({ category }) {
    console.log("in product list", category)
    return (
        <div>
            {category.product.map((product) => (
                <ProductItem product={product} />
            ))}
        </div>
    )
}
