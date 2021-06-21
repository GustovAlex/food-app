import { takeLatest, put, call } from "redux-saga/effects"
import { fetchGetClientData } from "../../helpers/httpServices"
import axios from "axios"
import { SET_CLIENT_DATA, GET_DATA } from "../types"
import { setData } from "../actions/index"

// const fetchGetClientData = async () => {
//     const response = await axios.get("http://localhost:5000/api/category")
//     console.log("response", response)
//     return response
// }

const getClientData = function* () {
    try {
        const data = yield call(fetchGetClientData)
        console.log("data", data)
        yield put(setData(data.data.categoriesList))
    } catch (e) {
        console.log({ e })
    }
}

export default [takeLatest(GET_DATA, getClientData)]
