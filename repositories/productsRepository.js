// Repository: requerimos el factory para seleccionar el tipo de persistencia

const productsFactory = require("../factories/productsFactory");
const ProductsDTO = require("../DTOs/productsDTO");

class ProductsRepository {
  constructor() {
    this.dao = productsFactory(process.env.PERSISTENCE);
    console.log(this.dao);
  }

  async get() {
    const result = await this.dao.get();  
    return result.map((product) => new ProductsDTO(product));
  }

  async getById(id) {
    try{
      const result = await this.dao.getById(id);
      console.log(result)
      //return new ProductsDTO(result);
    } catch (e) {
      return e
    }

  }

  async post(body) {
    return await this.dao.post(body);
  }

  async put(id, body) {
    return await this.dao.put(id, body);
  }

  async delete(id) {
    return await this.dao.delete(id);
  }
}

module.exports = ProductsRepository;
