import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Marker from "../../common/MarkerNewPromotion/Marker"
import "./productItemStyles.scss"
import Button from "../../common/button/button/Button"
import { useDispatch } from "react-redux"
import { addProductToOrder } from "../../../redux/actions/index"

export default function ProductItem({ product, isPromotion, isNew }) {
    const dispatch = useDispatch()
    const onClickAddToOrder = () => {
        dispatch(addProductToOrder(product))
    }

    return (
        <div className='productItem'>
            <div className='productItem-container'>
                <div>
                    <div className='productItem-container-markers'>
                        {isPromotion ? <Marker text='sale' /> : null}
                        {isNew ? <Marker text='new' /> : null}
                    </div>
                    <div className='productItem-container-imgWrap'>
                        {product?.img ? (
                            <img
                                className='productItem-container-imgWrap-img'
                                src={`/img/${product?.img}`}
                                alt='product'
                            />
                        ) : (
                            <div className='productItem-container-imgWrap-noImg'>
                                no img
                            </div>
                        )}
                    </div>
                </div>

                <div className='productItem-container-info'>
                    <h2 className='productItem-container-info-title'>
                        {product?.name}
                    </h2>
                    <p className='productItem-container-info-ingredients'>
                        {product?.ingredients}
                    </p>
                    <Button
                        text='add to cart'
                        icon={faPlus}
                        onClick={onClickAddToOrder}
                    />
                </div>
            </div>
        </div>
    )
}
