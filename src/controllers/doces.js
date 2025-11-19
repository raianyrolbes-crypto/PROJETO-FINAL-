import { Doces } from "../models/doces.js";

class DoceController{
    buscarDoce = async (req, res) =>{
        const response = await Doces.find()
        res.json(response)
    }
    criarDoce = (req, res) =>{
        const {nome, preco} = req.body
        if (!nome, !preco){
            res.status(422).json({
                erro: true,
                message: "Dados incorretos" 
            })
            return
        }
        const doce = new Doces({
            nome, preco
        })
        doce.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Doce criada com sucesso",
                mesa: mesa
            })).catch(err =>{
            res.status(422).json({
                erro: true,
                message: "Dados incorretos" 
            })        
        })
    }
    atualizarDoce = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await Doces.findByIdAndUpdate(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Alteração no doce feita"
            })
        }else{
            res.json({
                erro: false,
                message: "Alteração no doce não foi feita"
            })
        }
    }
    deletarDoce = async (req, res) =>{
        const {id} = req.params
        const {nome, preco} = req.body
        const response = await Doces.findByIdAndDelete(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Doce apagado"
            })
        }else{
            res.json({
                erro: false,
                message: "Não apagou o doce"
            })
        }
    }
    buscarDocePorId = async (req, res) =>{
        const {id} = req.params
        const response = await Doces.findById(id)
        res.json(response)
    }
}

export default new DoceController()