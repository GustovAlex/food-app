import { SET_CLIENT_DATA, TOGLE_LOADING } from "../types"

const defaultState = {
    categoriesList: [],
    loading: false,
}

export default function clientReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CLIENT_DATA:
            return {
                ...state,
                categoriesList: action.payload,
            }
        case TOGLE_LOADING:
            return {
                ...state,
                loading: !state.loading,
            }
        default:
            return state
    }
}
