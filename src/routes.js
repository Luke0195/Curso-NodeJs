const express= require('express')

const routes= express.Router()
const productController= require('./controllers/productController')

//Primeira Rota
routes.get('/products',productController.index) // Estamos importando do nosso controllador o método index
routes.get('/products/:id', productController.show) // para incluir um parametro adicional usamos o :(nome do parâmetro)
routes.post('/product',productController.store)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id',productController.destroy)



module.exports= routes  