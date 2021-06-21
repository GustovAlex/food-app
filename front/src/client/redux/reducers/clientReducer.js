import { SET_CLIENT_DATA, TOGLE_IS_LOADING } from "../types"

const defaultState = {
    categoriesList: {},
    isLoading: false,
}

export default function clientReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CLIENT_DATA:
            console.log(action.payload)
            return {
                ...state,
                categoriesList: action.payload,
            }
        case TOGLE_IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        default:
            return state
    }
}
