import { takeLatest, put, call } from "redux-saga/effects"
import {
    fetchGetClientData,
    fetchGetProductList,
} from "../../helpers/httpServices"
import { GET_DATA, TOGLE_LOADING } from "../types"
import { setData } from "../actions/index"

const getClientData = function* () {
    try {
        yield put({ type: TOGLE_LOADING })
        const data = yield call(fetchGetClientData)
        const productList = yield call(fetchGetProductList)
        console.log("productList", productList.data)
        yield put(
            setData({
                categoriesList: data.data.categoriesList,
                productList: productList.data.productList,
            })
        )
        yield put({ type: TOGLE_LOADING })
    } catch (e) {
        console.log({ e })
    }
}

export default [takeLatest(GET_DATA, getClientData)]
