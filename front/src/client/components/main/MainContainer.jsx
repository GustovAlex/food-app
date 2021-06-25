import { useSelector } from "react-redux"
import Main from "./Main"

export default function MainContainer() {
    const { categoriesList } = useSelector((state) => state.data)
    return <Main categoriesList={categoriesList} />
}
