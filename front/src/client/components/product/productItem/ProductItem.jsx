import IconButton from "../../common/iconButton/IconButton"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import "./productItemStyles.scss"

export default function ProductItem({ product }) {
    return (
        <div className='productItem'>
            <div className='productItem-container'>
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
                <div className='productItem-container-info'>
                    <h2 className='productItem-container-info-title'>
                        {product?.name}
                    </h2>
                    <p className='productItem-container-info-ingredients'>
                        {product?.ingredients}
                    </p>
                    <div className='productItem-container-info-button'>
                        <p>add to cart</p>
                        <IconButton
                            className='productItem-order-icon'
                            icon={faPlus}
                            color='#fff'
                            fontSize='14px'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
