import { useEffect } from "react"
import { useSelector } from "react-redux"
import "./mainStyles.scss"
import CategoryItem from "./categoryItem/CategoryItem"

export default function Main({ categoriesList }) {
    // const { categoriesList } = useSelector((state) => state.data)

    // const { categoriesList } = useSelector((state) => state.data)
    // console.log("in main component", categoriesList)
    return (
        <div className='main'>
            <div>
                {categoriesList.map((category) => (
                    <CategoryItem category={category} />
                ))}
            </div>
            MAIN PAGE CONMPONENT
        </div>
    )
}
