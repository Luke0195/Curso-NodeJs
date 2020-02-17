const express= require('express')

const routes= express.Router()
const productController= require('./controllers/productController')

//Primeira Rota
routes.get('/products',productController.index) // Estamos importando do nosso controllador o método index
routes.post('/product',productController.store)
   



module.exports= routes  