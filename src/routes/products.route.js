const express = require('express')
const router = express.Router()
const db = require('../db.js')
const slug = require('slug-generator')

router.get('/', async (req, res) => {
   const response = await db.select().from('products')
   res.json(response)

})

router.post('/', async(req, res)=>{
   let data = req.body //se llama body donde en donde esta guardado todo
   data.slug = slug(data.name)
   let product = await db('products').insert(data)

  /*  db('products').insert(data)  //insert() es una funcion */

  res.json('Guardado')
})

module.exports = router