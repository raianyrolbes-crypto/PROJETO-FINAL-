import { Refri } from "../models/refri.js"

class RefriController{
    buscarRefri = async (req, res) =>{
        const response = await Refri.find()
        res.json(response)
    }
    addRefri = (req, res) =>{
        const {sabor, preco} = req.body
        if (!sabor || !preco){
            res.status(422).json({
                erro: true,
                message: "Dados incorretos" 
            })
            return
        }
        const refri = new Refri({
            sabor, preco
        })
        refri.save().then(
            () => res.status(201).json({
                erro: false,
                message: "Refri criado com sucesso",
                suco : suco
            })).catch(err =>{
            res.status(422).json({
                erro: true,
                message: "Dados incorretos" 
            })        
        })
    }
    buscarRefriPorId = async (req, res) =>{
        const {id} = req.params
        const response = await Refri.findById(id)
        res.json(response)
    }
    atualizarRefri = async (req, res) =>{
        const {id} = req.params
        const {sabor, preco} = req.body
        const response = await Refri.findByIdAndUpdate(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Alteração no refri feita"
            })
        }else{
            res.json({
                erro: false,
                message: "Alteração no refri não foi feita"
            })
        }
    }
    deletarRefri = async (req, res) =>{
        const {id} = req.params
        const {sabor, preco} = req.body
        const response = await Refri.findByIdAndDelete(id, req.body)
        if (response){
            res.json({
                erro: false,
                message: "Refri apagado"
            })
        }else{
            res.json({
                erro: false,
                message: "Não apagou o refri"
            })
        }
    }
}
export default new RefriController()