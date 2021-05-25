import AdminPartContainer from './AdminPartContainer'
import { Provider } from 'react-redux'
import {store} from './redux/reducers/index'

export default function AdminPart() {

    return (
        <Provider store={store}>
            <AdminPartContainer/>
        </Provider>
    )
}