import { createStore, applyMiddleware, combineReducers } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootSaga from "../sagas/rootSaga"
import clientReducer from "./clientReducer"
import orderReducer from "./orderReducer"

const rootReduser = combineReducers({
    data: clientReducer,
    order: orderReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReduser,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
