import { CREATE_CATEGORY, GET_CATEGORIES } from '../constants/categoryConstans'

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
        case CREATE_CATEGORY :
            return {
                ...state,
                categories: [...state.categories, action.payload] //! ...state.categories sperates the categories array that's in state and adding the payload at the end
            }
        default:
            return state
    }
}

export default categoryReducer