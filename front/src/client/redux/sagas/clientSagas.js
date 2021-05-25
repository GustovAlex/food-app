import { takeLatest, put} from "redux-saga/effects";
import { fetchGetData} from "../../helpers/httpServices";

import {
  GET_DATA
} from "../types";
import { getData } from "../actions/index";

const getClientData = function* () {
  try {
    const { data } = yield (fetchGetData())
    yield put(getData(data));
  } catch (e) {
    console.log({ e });
  }
};

export default [
  takeLatest(GET_DATA, getClientData),
];
