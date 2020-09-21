const BaseService = require("./base.service");

let _commentRepository = null,
  _ideaRepository = null;

/**
 * Servicios de los comentarios
 */
class CommentService extends BaseService {
  /**
   * Construye la instancia de los servicios de los comentarios con el repositorio
   * correspondiente
   * @param {*} param0
   */
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _ideaRepository = IdeaRepository;
  }

  /**
   * Obtiene los comentarios de una idea
   * @param {*} ideaId
   * @throws  - Si el id de la idea no fue enviado, entonces lanza una excepcion con
   *            status 400.
   *          - Si no se encuentra una idea con el id ingresado, entonces lanza una
   *            excepcion con status 404
   */
  async getIdeaComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId must be sent";
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "idea does not exist";
    }

    const { comments } = idea;
  }

  /**
   * Crea y agrega un comentario a una idea.
   * @param {*} comment 
   * @param {*} ideaId 
   * @throws  - Si el id de la idea no es enviado lanza una excepcion con status 400.
   *          - Si no existe una idea con el id ingresado, entonces lanza una excepcion
   *            con status 404.
   */
  async createComment(comment, ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId must be sent";
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "idea does not exist";
    }

    const createdComment = await _commentRepository.create(comment);

    idea.comments.push(createdComment);

    return await _ideaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
