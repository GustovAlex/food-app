import {
    SET_CLIENT_DATA,
    GET_DATA,
    TOGLE_LOADING,
    ADD_PRODUCT_TO_ORDER,
} from "../types"

export const setData = (payload) => ({ type: SET_CLIENT_DATA, payload })
export const getCategories = () => ({ type: GET_DATA })
export const togleIsLoading = () => ({ type: TOGLE_LOADING })
export const addProductToOrder = (payload) => ({
    type: ADD_PRODUCT_TO_ORDER,
    payload,
})
