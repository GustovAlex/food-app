import { takeLatest, put, call } from "redux-saga/effects"
import { fetchGetClientData } from "../../helpers/httpServices"
import { GET_DATA, TOGLE_LOADING } from "../types"
import { setData } from "../actions/index"

const getClientData = function* () {
    try {
        yield put({ type: TOGLE_LOADING })
        const data = yield call(fetchGetClientData)
        yield put(setData(data.data.categoriesList))
        yield put({ type: TOGLE_LOADING })
    } catch (e) {
        console.log({ e })
    }
}

export default [takeLatest(GET_DATA, getClientData)]
