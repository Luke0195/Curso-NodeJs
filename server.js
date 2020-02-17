const express= require('express')
const mongoose= require('mongoose')

//Iniciando o App
const app= express()

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/Nodeapi',
{useNewUrlParser:true,
useUnifiedTopology:true})


//Primeira Rota
app.get('/', (request, response)=>{

    response.send('Mudei para a  Rocketseat')

})




app.listen(3001)