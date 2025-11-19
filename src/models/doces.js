import { model,Schema } from "mongoose";

const docesSchema = new Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true}
})

const Doces = model('Docecs', docesSchema)
export {Doces}