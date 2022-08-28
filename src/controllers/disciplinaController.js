const Retangulo = require('../models/disciplinaModel') 

module.exports = {
    create(request, response){
        const quadrado = new Retangulo(10, 10);
        console.log(quadrado.calculaArea())
        return response.send('teste')
    }
}