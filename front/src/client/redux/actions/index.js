import {
	GET_CLIENT_DATA,
  } from "../types";
  
  export const getData = (payload) => ({ type: GET_CLIENT_DATA, payload });