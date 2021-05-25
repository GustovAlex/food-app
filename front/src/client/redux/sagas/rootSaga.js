import { all } from "redux-saga/effects";
import clientSagas from "./clientSagas";

function* rootSaga() {
  return yield all([...clientSagas]);
}

export default rootSaga;