import ProductItem from "./productItem/ProductItem"
import "./productListStyles.scss"

export default function ProductList({ category }) {
    return (
        <div className='product'>
            <div className='product-item'>
                {category?.product.length &&
                    category?.product.map((product) => (
                        <ProductItem key={product._id} product={product} />
                    ))}
            </div>
        </div>
    )
}
