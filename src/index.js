//Framework para crear un servidor facilmente
const express = require('express')

//Pluggin para leer archivos
const fs = require('fs')

//iniciamos el servidor web desde el metodo express
const app = express()

//middlewares
app.use(express.json())


//rutas
app.get('/', (request, response)=>{
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    //console.log(productos[1])
    response.json(productos)
})

app.post('/',(request, response)=>{
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    productos.push(request.body)
    //console.log(request, body)
    response.json(productos)
    //response.send('es post')
})

app.delete('/', (request, response)=>{
    response.send('respuesta de DELETES')
})

app.put('/',(request,response)=>{
    response.send('respuesta desde PUT')
})

//Metodo que permite al servidor web escuchar en un puerto especifico
app.listen(4000, ()=>{
    console.log('el servidor esta ejecutando en http://localhost:4000/')
})