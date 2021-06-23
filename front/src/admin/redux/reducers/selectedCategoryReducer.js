import { SET_SELECTED_CATEGORY_ID } from "../types"

const defaultState = {
    selectedCategoryId: null,
}

export default function selectedCategoryReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SELECTED_CATEGORY_ID:
            return {
                ...state,
                selectedCategoryId: action.payload,
            }
        default:
            return state
    }
}
