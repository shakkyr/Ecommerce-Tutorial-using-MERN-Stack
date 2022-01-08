import axios from 'axios'


export const createCategory = async (formData) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }

    const response = await axios.post('/api/category', formData , config)
    return response
}
export const getCategories = async () => {

    const response = await axios.get('/api/category')
    return response
}

