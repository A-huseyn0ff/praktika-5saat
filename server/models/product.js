import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
 image:{type:String},
 name:{type:String},
 price:{type:Number}
});


export const pro=mongoose.model('p',productSchema)