import {
    SET_SELECTED_CATEGORY_ID,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
} from "../types"

export const setSelectedCategoryId = (payload) => ({
    type: SET_SELECTED_CATEGORY_ID,
    payload,
})
export const addProduct = (payload) => ({ type: ADD_PRODUCT, payload })
export const deleteProduct = (payload) => ({ type: DELETE_PRODUCT, payload })
export const updateProduct = (payload) => ({ type: UPDATE_PRODUCT, payload })
