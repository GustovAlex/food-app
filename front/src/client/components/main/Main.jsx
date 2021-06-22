import { useEffect } from "react"
import { useSelector } from "react-redux"
import "./mainStyles.scss"
import CategoryItem from "./categoryItem/CategoryItem"
import { NavLink } from "react-router-dom"

export default function Main({ categoriesList }) {
    // const { categoriesList } = useSelector((state) => state.data)

    // const { categoriesList } = useSelector((state) => state.data)
    console.log("in main component", categoriesList)
    return (
        <div className='main'>
            <div className='main-item'>
                {categoriesList.map((category) => (
                    <NavLink
                        className='main-item-link'
                        to={category.name}
                        key={category._id}>
                        <CategoryItem category={category} />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
