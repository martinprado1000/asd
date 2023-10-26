const ProductsService = require("../services/productsService")

class ProductsController {
    constructor(){
        this.productService = new ProductsService 
    }

    async get(req,res){
        const result = await this.productService.get()
        res.json(result)
    }

    async getById(req,res){
        const id = req.params.pid
        const result = await this.productService.getById(id)
        res.json(result)
    }

    async post(req,res){
        const body = req.body
        const result = await this.productService.post(body)
        res.status(201).json({"data":result})
    }

    async put(req,res){
        const id = req.params.id
        const body = req.body
        const result = await this.productService.put(id,body)
        res.status(201).json({"data":result})
    }

    async delete(req,res){
        const id = req.params.id
        const result = await this.productService.delete(id)
        res.status(204).json({"data":result})
    }

}

module.exports = ProductsController;