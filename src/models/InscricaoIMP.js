const Indisponivel = require('./../statePatterns/inscricaoState/Indisponivel') 
const PrimeiraFase = require('./../statePatterns/inscricaoState/PrimeiraFase') 
const SegundaFase = require('./../statePatterns/inscricaoState/SegundaFase') 


class InscricaoIMP{
    #primeiraFase;
    #segundaFase;
    #indisponivel;
    #currentState;
    #observers;
    constructor() {
      this.#primeiraFase = new PrimeiraFase(this);
      this.#segundaFase = new SegundaFase(this);
      this.#indisponivel = new Indisponivel(this);
      this.#currentState = this.indisponivel
      this.#observers = []
    }

    get currentState(){
      return this.#currentState
    }

    get observers(){
      return this.#observers
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
        for(let o of this.observers){
            o.update()
        }
    }

  }

module.exports = InscricaoIMP