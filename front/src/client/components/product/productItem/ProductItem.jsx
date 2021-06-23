import IconButton from "../../common/iconButton/IconButton"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import "./productItemStyles.scss"

export default function ProductItem({ product }) {
    return (
        <div>
            {product.name}
            <IconButton
                className='productItem-order-icon'
                icon={faCartArrowDown}
                color='#ff8302'
                fontSize='24px'
            />
        </div>
    )
}
