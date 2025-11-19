import {model, Schema} from "mongoose";

const entregaSchema = new Schema({
    numero: {type: Number, required: true},
    doces: {type: Schema.Types.ObjectId, ref: 'Doces', required: true},
    salgados: [{type: Schema.Types.ObjectId, ref: 'Salgados'}],
    endereco: {type: String, required: true}
})

const Entregas = model('Entregas', entregaSchema)

export {Entregas}