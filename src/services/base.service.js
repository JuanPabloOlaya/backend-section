/**
 * Servicio base que ofrece acceso al CRUD de cualquier repositorio
 */
class BaseService {
  /**
   * Construye la instancia de BaseService con el repositorio indicado por parametro
   * @param {*} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Obtiene el registro por id o devuelve un error en caso de que el id no sea ingresado.
   * @param {*} id
   * @throws  - Si el id no se envió, entonces lanza una excepción con status 400
   *          - Si no existe un registro con ese id, lanza una excepcion con status 404
   */
  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";

      throw error;
    }

    const currentEntity = await this.repository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = "entity does not found";

      throw error;
    }

    return currentEntity;
  }

  /**
   * Devuelve todos los registros del repositorio
   */
  async getAll() {
    return await this.repository.getAll();
  }

  /**
   * Crea una nueva entidad
   * @param {*} entity
   */
  async create(entity) {
    return await this.repository.create(entity);
  }

  /**
   * Verifica si el id fue enviado y realiza la actualizacion del registro con los datos
   * ingresados
   * @param {*} id 
   * @param {*} entity 
   * @throws  - Si el id no envió, entonces lanza una excepción con status 400
   */
  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";

      throw error;
    }

    return await this.repository.update(id, entity);
  }

  /**
   * Elimina el registro por el id
   * @param {*} id 
   * @throws  - Si el id no se envió, entonces lanza una excepcion con status 400
   */
  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";

      throw error;
    }

    return await this.repository.delete(id);
  }
}

module.exports = BaseService;
