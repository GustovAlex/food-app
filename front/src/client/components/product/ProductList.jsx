import ProductItem from "./productItem/ProductItem"
import "./productListStyles.scss"

export default function ProductList({ category }) {
    return (
        <div>
            {category?.product.length &&
                category?.product.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            prod
        </div>
    )
}
