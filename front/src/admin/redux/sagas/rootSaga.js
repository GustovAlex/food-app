import { all } from "redux-saga/effects";
import adminSagas from "./adminSagas";
import categorySagas from "./categorySagas"

function* rootSaga() {
  return yield all([...adminSagas, ...categorySagas]);
}

export default rootSaga;
