import { Router } from "express";
import refri from "../controllers/refri.js";
const refriRouter = Router()

refriRouter.get("/", refri.buscarSucos)
refriRouter.post("/", refri.addSuco)
refriRouter.get("/:id", refri.buscarSucosPorId)
refriRouter.put("/:id", refri.atualizarSuco)
refriRouter.delete("/:id", refri.deletarSuco)

export {refriRouter}