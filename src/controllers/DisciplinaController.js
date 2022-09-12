const Disciplina = require("../models/Disciplina");
const { constants } = require("http2");

connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { body: data } = request;
    try {
      const disciplina = await Disciplina.create(data);
      return response.status(constants.HTTP_STATUS_CREATED).json({
        message: "Disciplina criada com sucesso",
        body: disciplina,
      });
    } catch (error) {
      console.log({ message: "Não foi possível inserir a disciplina", error });
      return response
        .status(constants.HTTP_STATUS_BAD_REQUEST)
        .json({ message: "Não foi possíveis criar a disciplina" });
    }
  },
};
