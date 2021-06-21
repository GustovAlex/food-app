import { SET_CLIENT_DATA, GET_DATA } from "../types"

export const setData = (payload) => ({ type: SET_CLIENT_DATA, payload })
export const getCategories = () => ({ type: GET_DATA })
