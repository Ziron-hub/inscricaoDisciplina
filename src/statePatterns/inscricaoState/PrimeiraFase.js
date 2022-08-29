class PrimeiraFase{
    constructor(inscricaoIMP) {
      if(!this._instance){
        this._instance = this
        this.inscricaoIMP = inscricaoIMP
      }
      return this._instance
    }
  
    mudarFase() {
      console.log('Mudando para a segunda fase de inscrição')
      this.inscricaoIMP.setState(this.inscricaoIMP.segundaFase)
    }

    static getInstance() {
        return this._instance;
    }
}

module.exports = PrimeiraFase