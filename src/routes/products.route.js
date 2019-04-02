const express = require('express')
const router = express.Router()
const db = require('../db.js')
const slug = require('slug-generator')

router.get('/', async (req, res) => {
   /*   const response = await db.select().from('products') */
   const products = db.select().from('products')
   const query = req.query
   const per_page = (query.per_page || 10) * 1 //registro por pagina
   const page = (query.page || 1) * 1 //per_page que pagina esta navegando
   const column_order = query.column_order || "name"
   const type_order = query.type_order || "asc"

   products.limit(per_page).offset((page-1)* per_page)
   products.orderBy(column_order,type_order)

   const data = {
      per_page : per_page ,
      page: page ,
      data : await products
   }

   res.json(data)

})

router.post('/', async (req, res) => {
   let data = req.body //se llama body donde en donde esta guardado todo
   data.slug = slug(data.name)
   let product = await db('products').insert(data)

   /*  db('products').insert(data)  //insert() es una funcion */

   res.json('Guardado')
})

router.delete('/:id', async (req, res) => {
   console.log(req.params)

   if (!req.params.id) {
      res.send('el id es requerido')
      return false
   }
   await db('products').where('id', req.params.id).del()


   res.send("eliminando")
})

router.put('/:id', async (req, res) => {
   //en el put utilizamos el params y body
   const { id } = req.params

   let product = await db.select().from('products').where('id', id)

   if (!product.length) {
      res.send('el producto no existe')
      return false
   }

   let data = req.body
   data.slug = slug(data.name)

   await db('products').where('id', id).update(data)

   res.send("actualizado")

})


module.exports = router