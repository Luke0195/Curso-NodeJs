const mongoose= require('mongoose')


const ProductSchema= new mongoose.Schema({  // Será minha tabela com os meus atributos no banco de dados
    // Atributos
    title:{
        type: String,
        required: true,
    },

    description:{
      type: String,
      required:true,
    },

    url:{
        type: String,
        required:true,
    },

    createAt:{ // Data de criação  de cada produto
        type:Date,
        default: Date.now,

    },
})


mongoose.model('Product', ProductSchema) // forma de registrar isso no nosso banco 