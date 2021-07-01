import { useSelector } from "react-redux"
import "./mainStyles.scss"
import CategoryItem from "./categoryItem/CategoryItem"
import { Link } from "react-router-dom"

export default function Main({ categoriesList }) {
    return (
        <div className='main'>
            <div className='main-item'>
                {categoriesList.length &&
                    categoriesList.map((category) => (
                        <Link
                            to={`/client/product/${category._id}`}
                            className='main-item-link'
                            key={category._id}>
                            <CategoryItem category={category} />
                        </Link>
                    ))}
            </div>
        </div>
    )
}
