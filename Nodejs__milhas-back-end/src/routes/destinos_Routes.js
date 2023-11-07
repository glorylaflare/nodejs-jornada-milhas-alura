import express from "express";
import DestinoController from "../controllers/destino_Controller.js";

const router = express.Router();

router
    .get("/destinos", DestinoController.listarDestinos)
    .get("/destinos/busca", DestinoController.listarDestinoPorNome)
    .post("/destinos", DestinoController.criarDestino)
    .put("/destinos/:id", DestinoController.atualizarDestino)
    .delete("/destinos/:id", DestinoController.excluirDestino);

export default router;