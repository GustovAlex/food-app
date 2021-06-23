import useStyles from "./ordersStyles"
import TitleContainer from "../common/title/TitleContainer"

export default function Orders() {
    return (
        <div>
            <TitleContainer
                titleText='List of Orders:'
                buttonText='Viev new orders'
            />
        </div>
    )
}
