import NewList from "./NewList"
import "./newStyles.scss"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export default function NewListContainer() {
    const history = useHistory()
    const { productList } = useSelector((state) => state.data)

    const onClickBackButton = () => {
        history.push("/clien/main")
    }

    return (
        <NewList
            productList={productList}
            onClickBackButton={onClickBackButton}
        />
    )
}
