const axios = require("axios");

const bibliotecaApi = axios.create({
    baseURL: 'https://pooa-grupos-academicos.herokuapp.com/',
})

module.exports = bibliotecaApi;
