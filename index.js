const express = require('express')
const app = express()
const port = 9090

const products = [
    {
        id:1,
        name: "Banana",
        price: 50,
        image: "images/banana.jpg",
        stock: 50
    },
    {
        id:2,
        name: "Manzana",
        price: 80,
        image: "images/manzana.png",
        stock: 50
    },
    {
        id:3,
        name: "Naranja",
        price: 40,
        image: "images/naranja.jpg",
        stock: 50
    },
    {
        id:4,
        name: "Durazno",
        price: 100,
        image: "images/durazno.jpg",
        stock: 50
    }
];

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.use("/", express.static("front"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})