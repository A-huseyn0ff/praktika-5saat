import express from 'express'
import mongoose from 'mongoose'
import route from './routes/product.js'
import cors from 'cors'
const app=express()

app.use(express.json())
app.use(cors())
app.use('/product',route)
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net')

app.listen(4000,()=>{
    console.log('salam');
})
