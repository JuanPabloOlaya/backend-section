const BaseService = require("./base.service");

let _userRepository = null;

/**
 * Servicio de Usuario
 */
class UserService extends BaseService {
  /**
   * Construye una instancia de los servicios de usuario
   * @param {*} param0
   */
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  /**
   * Obtiene un usuario por el username
   * @param {*} username
   */
  async getUserByUsername(username) {
    return await _userRepository.getUserByUsername(username);
  }
}

module.exports = UserService;
