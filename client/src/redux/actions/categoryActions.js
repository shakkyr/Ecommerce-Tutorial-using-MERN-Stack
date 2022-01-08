import {START_LOADING, STOP_LOADING} from '../constants/loadingConstants'
import {SHOW_ERROR_MESSAGE} from '../constants/messageConstants'
import {GET_CATEGORIES} from '../constants/categoryConstans'
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
