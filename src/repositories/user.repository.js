const BaseRepository = require("./base.repository");

let _user = null;

/**
 * Repositorio para el modelo de usuario
 */
class UserRepository extends BaseRepository {

  /**
   * Construye una instancia del repositorio de Usuario
   * @param {*} param0
   */
  constructor({ User }) {
    super(User);
    _user = User;
  }

  /**
   * Obtiene un usuario por su nombre de usuario
   * @param {*} username 
   */
  async getUserByUsername(username) {
    return await _user.findOne({ username });
  }
}

module.exports = UserRepository;
