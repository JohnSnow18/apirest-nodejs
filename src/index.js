//Framework para crear un servidor facilmente
const express = require('express')

//Pluggin para leer archivos
const fs = require('fs')

//iniciamos el servidor web desde el metodo express
const app = express()

//middlewares
app.use(express.json())


//rutas
app.use('/api', require('../src/routes/index.route'))



//Metodo que permite al servidor web escuchar en un puerto especifico
app.listen(3000, ()=>{
    console.log('el servidor esta ejecutando en http://localhost:3000/')
})