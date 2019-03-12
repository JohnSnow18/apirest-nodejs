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
/* app.get('/producto/:nombre?', (request, response)=>{
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    // creamos un arreglo vacio
    let res =  []  
    
    //console.log(productos[1])

    //si el parametro "nombre" no existe
    if(request.params.nombre){
        productos.map((value)=>{   //recorremos el 
            if(request.params.nombre == value.nombre){
                //aqui se encontro una coincidencia
                res.push(value)
            }
        })
    }else{
        res = productos
    }

    response.json(res)
})

app.post('/producto',(request, response)=>{
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    productos.push(request.body)
    //console.log(request, body)
    fs.writeFileSync('src/db/productos.json',JSON.stringify(productos)) // funcion para escribir en el archivo
    response.json(productos)
    //response.send('es post')
})

app.delete('/producto/:nombre', (request, response)=>{
    //response.send('respuesta de DELETES')
    let nombre = request.params.nombre //para recuperar
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    let index

    productos.map((value, i)=>{
        if(value.nombre == nombre){
            index = i
        }
    })
    productos.splice(index, 1)

    fs.writeFileSync('src/db/productos.json',JSON.stringify(productos)) // funcion para escribir en el archivo
    
    response.json(productos)

})

app.put('/producto/:nombre',(request,response)=>{  //el put es para actualizar un recurso
    //response.send('respuesta desde PUT')
    let nombre = request.params.nombre //para recuperar
    let productos = JSON.parse(fs.readFileSync('src/db/productos.json', 'utf8'))
    let index

    productos.map((value, i)=>{
        if(value.nombre == nombre){
            index = i
        }
    })

    productos[index] = request.body
    fs.writeFileSync('src/db/productos.json',JSON.stringify(productos)) // funcion para escribir en el archivo
    response.json(request.body)
})

app.get('/usuario',(request,response)=>{
    response.send('Desde GET Usuario')
}) */

//Metodo que permite al servidor web escuchar en un puerto especifico
app.listen(3000, ()=>{
    console.log('el servidor esta ejecutando en http://localhost:3000/')
})