const express = require('express')
const app = express()
const port = 3000
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

app.get('/api/products', getProducts)
app.get('api/products', getProduct)
