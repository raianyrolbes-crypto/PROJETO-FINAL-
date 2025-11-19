import express from "express"
import mongoose from "mongoose"
import { salgadosRouter } from "./routes/salgados.js"
import { docesRouter } from "./routes/doces.js"
import { entregasRouter } from "./routes/entregas.js"
import { refrisRouter } from "./routes/refri.js"
const app = express()
app.use(express.json())

app.use("/entregas", entregasRouter)

app.use("/doces", docesRouter)

app.use("/salgados", salgadosRouter)

app.use("/refris", refrisRouter)

mongoose.connect("mongodb://localhost:27017")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB"))

app.listen(3333, () => {
    console.log("Servidor Rodando na Porta 3333")
})