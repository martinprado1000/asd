const ProductsRepository = require("../repositories/productsRepository");

class ProductsService {
  constructor() {
    this.ProductsRepository = new ProductsRepository();
  }

  async get() {
    try {
      const result = await this.ProductsRepository.get();

      if(!result){
        return {"status":404,"data":"Productos no encontrados"}
      }

      return {"status":200,"data":result}

    } catch (e) {
      //console.log(e);
      return {"status":404,"data":"Productos no encontrados"}
      return e
    }
  }

  async getById(id) {
    try {
      const result = await this.ProductsRepository.getById(id);
      console.log(result)
      if(!result){
        return {"status":404,"data":"Producto no encontrado1"}
      }
      //console.log(result)
      return {"status":200,"data":result}

    } catch (e) {
      //console.log(e)
      return {"status":404,"data":"Productos no encontrados2"}
    }
  }

  async post(body) {
    try {
      return this.ProductsRepository.post(body);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  async put(id, body) {
    return this.ProductsRepository.put(id, body);
  }

  async delete(id) {
    return this.ProductsRepository.delete(id);
  }
}

module.exports = ProductsService;
