import ProductItem from "../product/productItem/ProductItem"
import Button from "../common/button/button/Button"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function NewList({ productList, onClickBackButton }) {
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
                        product.isNewProduct ? (
                            <ProductItem
                                key={product._id}
                                product={product}
                                isNew={product.isNewProduct}
                            />
                        ) : null
                    )}
            </div>
        </div>
    )
}
