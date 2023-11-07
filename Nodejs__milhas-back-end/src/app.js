import express from "express";
import data_base from "./config/data_connect.js";
import routes from "./routes/index.js";

data_base.on("error", console.log.bind(console, "Erro de conexão"));
data_base.once("open", () => {
    console.log("Conexão com o banco de dados foi feita com sucesso.");
});

const app = express();
routes(app);

export default app;