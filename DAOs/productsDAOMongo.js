const productsModel = require("../models/productsModel");

class ProductsDAOMongo {
  constructor() {
    this.productsModel = productsModel;
  }

  async get() {
    const result = await this.productsModel.find();
    if (!result) {
      throw new Error("Producto no encontrado");
    }
    return result;
  }

  async getById(id) {
    try {
      return await this.productsModel.findById(id);
    } catch (e) {
      throw new Error("Producto no encontrado");
    }
  }

  async post(body) {
    const result = await this.productsModel.create(body);
    if (!result) {
      throw new Error("Error al cargar el producto");
    }
    return result;
  }

  async put(id, body) {
    const result = await this.productsModel.findByIdAndUpdate(id, {
      $set: body,
    });
    if (!result) {
      throw new Error("Error al editar el producto");
    }
    return result;
  }

  async delete(id) {
    try {
      const result = await this.productsModel.delete(id);
      if (!result) {
        throw new Error("Error al eliminar el producto");
      }
      return result;
    } catch (e) {
      return "Error desconocido al realizar la consulta";
    }
  }
}

module.exports = ProductsDAOMongo;
