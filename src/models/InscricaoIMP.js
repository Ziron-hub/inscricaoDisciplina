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
        this.observers.push(observer)
    }

    removeObserver(observer){
        let index = this.observers.indexOf(observer)
        if(index >-1){
            this.observers.slice(index,1)
        }
    }

    notifyAllObservers(){
        for(let o of this.observers)
            console.log(o.name, "foi notificado")
    }

  }

module.exports = InscricaoIMP