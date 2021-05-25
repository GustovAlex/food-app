import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas/rootSaga";
import adminReducer from "./adminReducer";
// import currentEmploeeImage from "./currentEmploeeImage"
// import currentProjectReducer from './currentProjectReducer'
// import currentProjectImagesReducer from './currentProjectImagesReducer'
// import exchangeRateReducer from './exchangeRateReducer'

const rootReduser = combineReducers({
  data: adminReducer,
  // currentEmployeeImage: currentEmploeeImage,
  // currentProject: currentProjectReducer,
  // currentProjectImajes: currentProjectImagesReducer,
  // exchangeRate: exchangeRateReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
