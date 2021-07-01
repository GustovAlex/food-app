import ProductItem from "../product/productItem/ProductItem"
import "../product/productListStyles.scss"
import Button from "../common/button/button/Button"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function PromotionList({ productList, onClickBackButton }) {
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
                {productList.length &&
                    productList.map((product) =>
                        product.isPromotionProduct ? (
                            <ProductItem
                                key={product._id}
                                product={product}
                                isPromotion={product.isPromotionProduct}
                            />
                        ) : null
                    )}
            </div>
        </div>
    )
}
