import {START_LOADING, STOP_LOADING} from '../constants/loadingConstants'
import {SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE} from '../constants/messageConstants'
import {GET_CATEGORIES , CREATE_CATEGORY} from '../constants/categoryConstans'
import axios from 'axios'




export const getCategories =  () => async dispatch => {
    try {
        dispatch({type: START_LOADING})
        const response = await axios.get('/api/category')
        dispatch({type: STOP_LOADING})
        dispatch({type: GET_CATEGORIES, payload: response.data.categories}) 

    } catch (error) {
        console.log('getCategories api error:' , error );
        dispatch({type: STOP_LOADING})
        dispatch({type: SHOW_ERROR_MESSAGE, payload: error.response.data.errorMessage})
    }
}
export const createCategory = formData => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({type: START_LOADING})
        const response = await axios.post('/api/category' , formData, config)
        dispatch({type: STOP_LOADING})
        dispatch({type: SHOW_SUCCESS_MESSAGE, payload: response.data.successMessage }) //!ths response is what we getback from server
        dispatch({type: CREATE_CATEGORY, payload: response.data.category })
    } catch (error) {
        console.log('create category api error:' , error );
        dispatch({type: STOP_LOADING})
        dispatch({type: SHOW_ERROR_MESSAGE, payload: error.response.data.errorMessage })
        
    }
}
