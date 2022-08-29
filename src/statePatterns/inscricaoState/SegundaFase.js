class SegundaFase{
    constructor(inscricaoIMP) {
      if(!this._instance){
        this._instance = this
        this.inscricaoIMP = inscricaoIMP
      }
      return this._instance
    }
  
    mudarFase() {
      console.log('Mudando para a inscrição indiponível')
      this.inscricaoIMP.setState(this.inscricaoIMP.indisponivel)
    }
    
    inscreveAluno(aluno, disciplina){

    }

    static getInstance() {
        return this._instance;
    }
}

module.exports = SegundaFase