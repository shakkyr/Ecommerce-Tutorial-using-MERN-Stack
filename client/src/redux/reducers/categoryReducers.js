import { GET_CATEGORIES } from '../constants/categoryConstans'

const INITIAL_STATE = {
    categories: []
}

const categoryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES :
            return {
                ...state,
                categories : action.payload,
            }
        default:
            return state
    }
}

export default categoryReducer