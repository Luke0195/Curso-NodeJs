const mongoose= require('mongoose')

const Product= mongoose.model('Product') // Importando o Product de model

module.exports={

    async index(request, response){ // Método que lista todos os produtos

        const  product= await Product.find()
        return response.json(product) // Retorna nossa informações em Json

    },

    async store(req, res){//Adicionando todos os dadps que serão passados no corpo da requisição
    
        const product = await Product.create(req.body)
        return res.json(product)
        

        
    }
}