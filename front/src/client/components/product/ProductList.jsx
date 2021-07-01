import ProductItem from "./productItem/ProductItem"
import "./productListStyles.scss"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Button from "../common/button/button/Button"

export default function ProductList({ category, onClickBackButton }) {
    return (
        <div className='product'>
            <div className='product-backButton'>
                <Button
                    text='back to MAIN'
                    icon={faArrowLeft}
                    onClick={onClickBackButton}
                />
            </div>

            <div className='product-item'>
                {category?.product.length &&
                    category?.product.map((product) => (
                        <ProductItem
                            key={product._id}
                            product={product}
                            isPromotion={product.isPromotionProduct}
                            isNew={product.isNewProduct}
                        />
                    ))}
            </div>
        </div>
    )
}
