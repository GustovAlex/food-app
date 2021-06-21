import ClientPartView from "./ClientPartView"
import { Provider } from "react-redux"
import { store } from "./redux/reducers/index"

export default function ClientPart() {
    return (
        <Provider store={store}>
            <ClientPartView />
        </Provider>
    )
}
