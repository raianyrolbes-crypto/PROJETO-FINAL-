import { Salgados } from "../models/salgados.js"

class SalgadoController{
    buscarSalgado = async (req, res) =>{
        const response = await Salgados.find()
        res.json(response)
    }
    addSalgado = (req, res) =>{
        const {nome, preco} = req.body
        if (!nome, !preco){
            res.status(422).json({
                erro: true,
                message: "Dados incorretos" 
            })
            return
        }
        const salgado = new Salgados({
            nome, preco
        })
        salgado.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Salgado criado com sucesso",
                prato: prato
            })).catch(err =>{
            res.status(422).json({
                erro: true,
                message: "Dados incorretos" 
            })        
        })
    }
    buscarSalgadoPorId = async (req, res) =>{
        const {id} = req.params
        const response = await Salgados.findById(id)
        res.json(response)
    }
    atualizarSalgado = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await Salgados.findByIdAndUpdate(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Alteração no salgado feita"
            })
        }else{
            res.json({
                erro: false,
                message: "Alteração no salgado não foi feita"
            })
        }
    }
    deletarSalgado = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await Salgados.findByIdAndDelete(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Salgado apagado"
            })
        }else{
            res.json({
                erro: false,
                message: "Não apagou o salgado"
            })
        }
    }
}
export default new SalgadoController()