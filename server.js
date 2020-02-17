const express= require('express')
const mongoose= require('mongoose')
const requireDir= require('require-dir')

//Iniciando o App
const app= express()
app.use(express.json()) // permitir que o express envie informações no formato json

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/Nodeapi',
{useNewUrlParser:true,
useUnifiedTopology:true})

requireDir('./src/models')

//app.use é um "coringa" que ira capturar todas as nossas rotas indiferente do método que seja criado.
// Rotas
app.use('/api', require('./src/routes'))




 



app.listen(3001)