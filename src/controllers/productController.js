const mongoose= require('mongoose')

const Product= mongoose.model('Product') // Importando o Product de model

module.exports={

    async index(req, res){ // Método que lista todos os produtos
        //Listagem
        //await Product.find()
        const {page = 1}= req.query
        const  product = await Product.paginate({}, {page, limit:10}) // Verificando no número de registro que pode ser visualizado na página
        return res.json(product) // Retorna nossa informações em Json

    },

    async show(req,res){

        const product = await Product.findById(req.params.id)  // Pegamos o id que veio da rota
        return res.json(product)

    },

    async store(req, res){//Adicionando todos os dadps que serão passados no corpo da requisição
        //Criação
        const product = await Product.create(req.body)
        return res.json(product)   
    },


    async update(req,res){
        // Atualizar
        const product= await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})  // `rimeiro buscamos o objeto por id e dps substituimos o valor
        return res.json(product)                                  // new:true atualizar o produto e retornar um novo titulo
    },

    async destroy(req,res){
        //Deletar
        await Product.findByIdAndDelete(req.params.id)
        return res.send()
    }
}