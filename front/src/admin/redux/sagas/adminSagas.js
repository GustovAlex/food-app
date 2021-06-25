import { takeLatest, put } from "redux-saga/effects"
import { fetchLoginAdmin, fetchGetData } from "../../helpers/httpServices"

import {
    LOGIN_ADMIN,
    SET_IS_LOGIN,
    SET_ERROR,
    TOGLE_IS_LOADING,
} from "../types"
import { getData } from "../actions/loginAdmin"

const loginAdminSaga = function* ({ payload }) {
    const { adminEmail, password } = payload
    try {
        const { data } = yield fetchLoginAdmin(adminEmail, password)
        localStorage.setItem("Authorization", `Bearer ${data.token}`)
        yield put({ type: SET_IS_LOGIN })
    } catch (e) {
        console.log({ e })
        if (e.response.status === 401) {
            const err = "Email or password is wrong"
            yield put({ type: SET_ERROR, payload: err })
            return err
        }
    }
}

const getAdminData = function* () {
    try {
        yield put({ type: TOGLE_IS_LOADING })
        const { data } = yield fetchGetData()
        yield put(getData(data))
        yield put({ type: TOGLE_IS_LOADING })
    } catch (e) {
        console.log({ e })
        yield put({ type: TOGLE_IS_LOADING })
    }
}

export default [
    takeLatest(LOGIN_ADMIN, loginAdminSaga),
    takeLatest(SET_IS_LOGIN, getAdminData),
]
