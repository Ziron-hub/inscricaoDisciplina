const axios = require("axios");

const bibliotecaApi = axios.create({
    baseURL: 'https://pooa-biblioteca.herokuapp.com/',
})

module.exports = bibliotecaApi;
