import aApi from './aApi';

class IBiblioteca {
    constructor() {

    }

    pendenciaBibiliotecaAluno(aluno){
        return aApi.get(`/pessoa/pendencias/${aluno}`)
    }

    getToken(){

    }
}