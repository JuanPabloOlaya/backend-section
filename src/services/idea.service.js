const BaseService = require("./base.service");

let _ideaRepository = null;

/**
 * Servicios de las ideas
 */
class IdeaService extends BaseService {
  /**
   * Construye la instancia de los servicios de las ideas
   * @param {*} param0
   */
  constructor({ IdeaRepository }) {
    super(IdeaRepository);
    _ideaRepository = IdeaRepository;
  }

  /**
   * Obtiene todas las ideas por el id de un usuario
   * @param {*} author
   * @throws  - Si el id del usuario no es enviado, entonces lanza una excepcion con
   *            status 400.
   */
  async getUserIdeas(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "userId mus be sent";

      throw error;
    }

    return await _ideaRepository.getUserIdeas(author);
  }

  /**
   * Agrega un voto positivo a la idea perteneciente al id ingresado
   * @param {*} ideaId
   * @throws  - Si el id de la idea no es enviado lanza una excepcion con status 400
   *          - Si no existe una idea por el id ingresado, entonces lanza una excepcion
   *            con status 404
   */
  async upvoteIdea(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId mus be sent";

      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "idea does not exist";

      throw error;
    }

    idea.upvotes.push(true);

    return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes });
  }

  /**
   * Agrega un voto negativo a la idea perteneciente al id ingresado
   * @param {*} ideaId
   * @throws  - Si el id de la idea no es enviado lanza una excepcion con status 400
   *          - Si no existe una idea por el id ingresado, entonces lanza una excepcion
   *            con status 404
   */
  async downvoteIdea(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId mus be sent";

      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "idea does not exist";

      throw error;
    }

    idea.downvotes.push(true);

    return await _ideaRepository.update(ideaId, { downvotes: idea.downvotes });
  }
}

module.exports = IdeaService;
