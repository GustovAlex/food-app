import {
	GET_DATA,
  } from "../types";
  
  export const getData = (payload) => ({ type: GET_DATA, payload });