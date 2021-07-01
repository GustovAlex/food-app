import { ADD_PRODUCT_TO_ORDER } from "../types"

const defaultState = {
    order: [],
}

export default function orderReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_ORDER:
            return {
                ...state,
                order: [...state.order, action.payload],
            }
        default:
            return state
    }
}
