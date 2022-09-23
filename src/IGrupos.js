const acadAPI = require('./acadAPI');

class IGrupos {
    contructor(){

    }

    getGrupos(alunoID, token){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return acadAPI.get(`/user/${alunoID}/academicGroup`, config)

    }
}

module.exports = IGrupos
