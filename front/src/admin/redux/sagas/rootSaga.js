import { all } from "redux-saga/effects"
import adminSagas from "./adminSagas"
import categorySagas from "./categorySagas"
import productSagas from "./productSagas"

function* rootSaga() {
    return yield all([...adminSagas, ...categorySagas, ...productSagas])
}

export default rootSaga
