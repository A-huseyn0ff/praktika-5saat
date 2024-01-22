import {pro} from '../models/product.js'

export const getAll=async(req,res)=>{
    const data=await pro.find({})

    res.send(data)
}
export const getProduct=async(req,res)=>{
    const id=req.params.id
    const data=await pro.findById(id)
    res.send(data)
}
export const delProduct=async(req,res)=>{
    const id=req.params.id
    const data=await pro.findByIdAndDelete(id)
    res.send(data)
}
export const postProduct=async(req,res)=>{
    const data=await new pro ({
        image:req.body.image,
        name:req.body.name,
        price:req.body.price
    })
    const saved=await data.save()

    res.send(saved)
}