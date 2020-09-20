/**
 * Repositorio base con funciones CRUD para los demas modelos
 */
class BaseRepository {
  /**
   * Construye una instancia del crud con el modelo ingresado por parametro
   * @param {*} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * Busca un registro por el id en el modelo instanciado.
   * @param {*} id
   */
  async get(id) {
    return await this.model.findById(id);
  }

  /**
   * Obtiene todos los registros del modelo
   */
  async getAll() {
    return await this.model.find();
  }

  /**
   * Agrega un nuevo registro en el modelo deseado
   * @param {*} entity
   */
  async create(entity) {
    return await this.model.create(entity);
  }

  /**
   * Actualiza un registro por el id
   * @param {*} id
   * @param {*} entity
   */
  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  /**
   * Elimina un registro del modelo
   * @param {*} id
   */
  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
