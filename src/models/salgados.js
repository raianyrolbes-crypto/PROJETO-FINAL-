import { model,Schema } from "mongoose";

const salgadosSchema = new Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true}
})

const Salgados = model('Salgados', salgadosSchema)
export {Salgados}