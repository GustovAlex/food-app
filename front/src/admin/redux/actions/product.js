import { SET_SELECTED_CATEGORY_ID, ADD_PRODUCT } from "../types"

export const setSelectedCategoryId = (payload) => ({
    type: SET_SELECTED_CATEGORY_ID,
    payload,
})

export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload })
