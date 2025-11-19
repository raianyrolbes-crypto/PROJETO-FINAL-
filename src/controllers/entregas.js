import { Entregas } from "../models/entregas.js";
class EntregaControllers{
    buscarEntrega = async (req, res) =>{
        const response = await Comandas.find()
        res.json(response)
    }

    criarEntrega = (req, res) => {
        const {numero, doces, salgados, endereco} = req.body
        if (!numero || !doces || salgados || !endereco){
            return res.status(422).json({
                erro: true,
                message: "Dados incorretos"
            })
        }
        const entrega = new Entregas({numero, docecs, salgados, endereco})
        entrega.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Entrega criada"
            })
        ).catch(
            err => {
                return res.status(422).json({
                    erro: true,
                    message: "Dados incorretos"
                })
            }
        )
    }

    atualizarEntrega = async (req, res) =>{
        const {id} = req.params
        const {numero, doces, salgados, endereco} = req.body
        const response = await Entregas.findByIdAndUpdate(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Alteração na entrega feita"
            })
        }else{
            res.json({
                erro: false,
                message: "Alteração na entrega não foi feita"
            })
        }
    }

    deletarEntrega = async (req, res) =>{
        const {id} = req.params
        const {numero, doces, salgados, endereco} = req.body
        const response = await Entregas.findByIdAndDelete(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Entrega apagada com sucesso"
            })
        }else{
            res.json({
                erro: false,
                message: "Não apagou a entrega"
            })
        }
    }
    buscarEntregaPorId = async (req, res) =>{
        const {id} = req.params
        const response = await Entregas.findById(id)
        res.json(response)
    }    
}

export default new EntregaControllers()