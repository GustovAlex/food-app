import "./categoryItemStyles.scss"
import { NavLink } from "react-router-dom"

export default function CategoryItem({ category }) {
    console.log("category product", category.product)
    return (
        <div className='categoryItem'>
            <div className='categoryItem-wrap'>
                <img
                    className='categoryItem-wrap-img'
                    src={`/categoriesImg/${category.img}`}
                    alt='img'
                />
                <h3 className='categoryItem-wrap-title'>{category.name}</h3>
            </div>
        </div>
    )
}
