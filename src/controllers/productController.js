const mongoose= require('mongoose')

const Product= mongoose.model('Product') // Importando o Product de model

module.exports={

    async index(request, response){ // Método que lista todos os produtos

        const  product= await Product.find()
        return response.json(product) // Retorna nossa informações em Json

    }
}