import axios from "axios";

const bibliotecaApi = axios.create({
    baseURL: 'https://pooa-biblioteca.herokuapp.com/',
})

export default api;
