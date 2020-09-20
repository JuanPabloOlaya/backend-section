const BaseRepository = require("./base.repository");

let _comment = null;

/**
 * Repositorio para el modelo de Comentario
 */
class CommentRepository extends BaseRepository {
  /**
   * Construye una instancia del repositorio
   * @param {*} param0
   */
  constructor({ Comment }) {
    super(Comment);
    _comment = Comment;
  }
}

module.exports = CommentRepository;
