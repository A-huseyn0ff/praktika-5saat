import { delProduct, getAll, getProduct, postProduct } from "../Controller/product.js"
import express from 'express'
const router=express.Router()

router.get('/',getAll)
router.get('/:id',getProduct)
router.post('/',postProduct)
router.delete('/:id',delProduct)


export default router