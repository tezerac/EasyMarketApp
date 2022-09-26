import express from 'express'
import products from './data/products.js'
import  dotenv from 'dotenv'
import connectDb from './config/db.js'

const app = express();
dotenv.config()
connectDb()

app.get('/api/products', (req, res) => {
    res.json(products)
  })

app.get('/api/products/:id', (req, res) => {
    const prod = products.find((p)=>p._id === req.params.id)
    res.json(prod)
  })

app.get('/', (req, res) => {
    res.json({'meg':'Hello world!'})
  })

const PORT = process.env.PORT
app.listen(PORT, console.log(`Server is running on ports ${5000}`));
