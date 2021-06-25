import {
    ADD_CATEGORY,
    ADD_CATEGORY_IMG,
    DELETE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY_IMG,
} from "../types"

export const addCategory = (payload) => ({ type: ADD_CATEGORY, payload })
export const addCategoryImg = (payload) => ({ type: ADD_CATEGORY_IMG, payload })
export const deleteCategoryImg = (payload) => ({
    type: DELETE_CATEGORY_IMG,
    payload,
})
export const deleteCategory = (payload) => ({ type: DELETE_CATEGORY, payload })
export const updateCategory = (payload) => ({ type: UPDATE_CATEGORY, payload })
