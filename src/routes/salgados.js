import { Router } from "express";
import salgados from "../controllers/salgados.js";
const salgadosRouter = Router()

salgadosRouter.get("/", salgados.buscarSalgado)
salgadosRouter.post("/", salgados.addSalgado)
salgadosRouter.get("/:id", salgados.buscarSalgadoPorId)
salgadosRouter.put("/:id", salgados.atualizarSalgado)
salgadosRouter.delete("/:id", salgados.deletarSalgado)

export {salgadosRouter}