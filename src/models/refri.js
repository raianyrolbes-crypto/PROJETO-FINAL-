import {model, Schema} from "mongoose";

const refriSchema = new Schema({
    sabor: {type: String, required: true},
    preco: {type: Number, required: true},
})

const Refri = model('Refris', refriSchema)

export {Refri}