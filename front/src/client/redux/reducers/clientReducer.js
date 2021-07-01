import { SET_CLIENT_DATA, TOGLE_LOADING } from "../types"

const defaultState = {
    categoriesList: [],
    productList: [],
    loading: false,
}

export default function clientReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CLIENT_DATA:
            console.log(action.payload)
            return {
                ...state,
                categoriesList: action.payload.categoriesList,
                productList: action.payload.productList,
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
