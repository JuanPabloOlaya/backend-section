const BaseRepository = require("./base.repository");

let _idea = null;

/**
 * Repositorio para el modelo de Idea
 */
class IdeaRepository extends BaseRepository {
  /**
   * Construye una instancia del repositorio
   * @param {*} param0
   */
  constructor({ Idea }) {
    super(Idea);
    _idea = Idea;
  }

  /**
   * Obtiene las ideas por el id del usuario
   * @param {*} author 
   */
  async getUserIdeas(author) {
    return await _idea.find({ author });
  }
}

module.exports = IdeaRepository;
