import { useSelector } from "react-redux"
import Main from "./Main"

export default function MainContainer() {
    const { categoriesList } = useSelector((state) => state.data)
    console.log("in main component", categoriesList)

    return <Main categoriesList={categoriesList} />
}
