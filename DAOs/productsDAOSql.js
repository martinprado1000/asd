const ProductsModel = require("../models/productsModel")

class ProductsDAOSql {
    constructor(){
        this.productsModel = new ProductsModel();
    }

    async get(){
        return await this.productsModel.get()
    }

    async getById(id){
        return await this.productsModel.getById(id)
    }

    async post(body){
        return this.productsModel.create(body)
    }

    async put(id,body){
        return this.productsModel.put(id,body)
    }

    async delete(id){
        return await this.productsModel.delete(id)
    }

}

module.exports = ProductsDAOSql;