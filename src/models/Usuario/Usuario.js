class Usuario {
    #cpf;
    #nome;
    #email;
    #senha;

    constructor(cpf, nome, email, senha) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
    }
    get cpf() {
        return this.#cpf;
    }
    get nome() {
        return this.#nome;
    }
    get email() {
        return this.#email;
    }
    get senha() {
        return this.#senha;
    }
    set cpf(cpf) {
        this.#cpf = cpf;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    set email(email) {
        this.#email = email;
    }
    set senha(senha) {
        this.#senha = senha;
    }
}

module.exports = Usuario;
