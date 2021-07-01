import PromotionList from "../promotion/PromotionList"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export default function PromotionListContainer() {
    const history = useHistory()
    const { productList } = useSelector((state) => state.data)
    const onClickBackButton = () => {
        history.push("/clien/main")
    }

    return (
        <PromotionList
            productList={productList}
            onClickBackButton={onClickBackButton}
        />
    )
}
