const axios = require('axios');

const apiBiblioteca = axios.create({
    baseURL: 'https://pooa-biblioteca.herokuapp.com/',
})

module.exports = apiBiblioteca;