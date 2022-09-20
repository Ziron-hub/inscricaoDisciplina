const aApi = require('./aApi');

class IBiblioteca {
    constructor() {

    }

    pendenciaBibiliotecaAluno(alunoID){
        return aApi.get(`/pessoa/pendencias/${alunoID}`)
    }

    getToken(){

    }
}

module.exports = IBiblioteca