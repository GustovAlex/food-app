import {
	GET_CLIENT_DATA,
  } from "../types";
  
  const defaultState = {
	data: {}
  };
  
  export default function clientReducer(state = defaultState, action) {
	switch (action.type) {

	//   case GET_CLIENT_DATA:
		// console.log(action.payload)
		// const { categoriesList } = action.payload;
		// return {
		//   ...state,
		//   data: categoriesList,
		// };
	  default:
		return state;
	}
  }