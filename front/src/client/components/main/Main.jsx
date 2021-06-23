import { useEffect } from "react"
import { useSelector } from "react-redux"
import "./mainStyles.scss"
import CategoryItem from "./categoryItem/CategoryItem"
import { NavLink } from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import ProductList from "../product/ProductList"

export default function Main({ categoriesList }) {
    // const { categoriesList } = useSelector((state) => state.data)

    // const { categoriesList } = useSelector((state) => state.data)
    console.log("in main component", categoriesList)
    return (
        <div className='main'>
            <div className='main-item'>
                {categoriesList.map((category) => (
                    <NavLink
                        to={`/client/product/${category._id}`}
                        className='main-item-link'
                        key={category._id}>
                        <CategoryItem category={category} />
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
