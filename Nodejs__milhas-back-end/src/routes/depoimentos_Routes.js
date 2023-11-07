import express from "express";
import DepoimentoController from "../controllers/depoimento_Controller.js";

const router = express.Router();

router
    .get("/depoimentos", DepoimentoController.listarDepoimentos)
    .get("/depoimentos-home", DepoimentoController.depoimentosHome)
    .post("/depoimentos", DepoimentoController.criarDepoimento)
    .put("/depoimentos/:id", DepoimentoController.atualizarDepoimento)
    .delete("/depoimentos/:id", DepoimentoController.excluirDepoimento);

export default router;