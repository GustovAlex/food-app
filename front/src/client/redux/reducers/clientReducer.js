import { SET_CLIENT_DATA } from "../types"

const defaultState = {
    categoriesList: {},
}

export default function clientReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CLIENT_DATA:
            console.log(action.payload)
            return {
                ...state,
                categoriesList: action.payload,
            }
        default:
            return state
    }
}
