const express= require('express')

const routes= express.Router()
const productController= require('./controllers/productController')

//Primeira Rota
routes.get('/product',productController.index) // Estamos importando do nosso controllador o método index


   



module.exports= routes  