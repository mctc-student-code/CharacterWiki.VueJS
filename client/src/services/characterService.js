import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/states/').then( response => {
            return response.data
        })
    }
}