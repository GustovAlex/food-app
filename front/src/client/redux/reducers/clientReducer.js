import {
	GET_DATA,
  } from "../types";
  
  const defaultState = {
	data: {}
  };
  
  export default function clientReducer(state = defaultState, action) {
	switch (action.type) {

	  case GET_DATA:
		console.log(action.payload)
		const { clientData } = action.payload;
		return {
		  ...state,
		  data: clientData,
		};
	  default:
		return state;
	}
  }