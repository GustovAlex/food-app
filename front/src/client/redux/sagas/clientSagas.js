import { takeLatest, put} from "redux-saga/effects";
import { fetchGetClientData } from "../../helpers/httpServices";

import {
  GET_CLIENT_DATA
} from "../types";
import { getData } from "../actions/index";

const getClientData = function* () {
  try {
    const { data } = yield (fetchGetClientData())
    console.log("data", data)
    yield put(getData(data));
  } catch (e) {
    console.log({ e });
  }
};

export default [
  takeLatest(GET_CLIENT_DATA, getClientData),
];
