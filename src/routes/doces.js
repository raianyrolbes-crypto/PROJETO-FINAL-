import { Router } from "express";
import doces from "../controllers/doces.js";
const docesRouter = Router()

docesRouter.get("/", doces.buscarDoce)
docesRouter.post("/", doces.criarDoce)
docesRouter.delete("/:id", doces.deletarDoce)
docesRouter.put("/:id", doces.atualizarDoce)
docesRouter.get("/:id", doces.buscarDocePorId)

export {docesRouter}
