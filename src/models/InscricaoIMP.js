const Indisponivel = require('./../statePatterns/inscricaoState/Indisponivel') 
const PrimeiraFase = require('./../statePatterns/inscricaoState/PrimeiraFase') 
const SegundaFase = require('./../statePatterns/inscricaoState/SegundaFase') 


class InscricaoIMP{
    constructor() {
      this.primeiraFase = new PrimeiraFase(this);
      this.segundaFase = new SegundaFase(this);
      this.indisponivel = new Indisponivel(this);
      this.currentState = this.indisponivel
      this.observers = []
    }
  
    setState(newState) {
      this.currentState = newState
    }
  
    mudarFase() {
        this.currentState.mudarFase()
    }

    atualizarPerfil(aluno){

    }

    defereAlunosAutomaticamente(){

    }

    addObserver(observer){

    }

    removeObserver(){
        
    }

  }

module.exports = InscricaoIMP