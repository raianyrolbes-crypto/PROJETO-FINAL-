import { Router } from "express"
import entregas from "../controllers/entregas.js"
const entregasRouter = Router()

entregasRouter.get("/", entregas.buscarEntrega)
entregasRouter.post("/", entregas.criarEntrega)
entregasRouter.delete("/:id", entregas.deletarEntrega)
entregasRouter.put("/:id", entregas.atualizarEntrega)
entregasRouter.get("/:id", entregas.buscarEntregaPorId)

export {entregasRouter}