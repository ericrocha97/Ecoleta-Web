import axios from 'axios';


const api = axios.create({
    baseURL: 'https://ecoleta-server-api.herokuapp.com/'
});

export default api;