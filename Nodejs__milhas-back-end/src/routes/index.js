import express from "express";
import depoimentos from "./depoimentos_Routes.js"
import destinos from "./destinos_Routes.js";
import cors from "cors";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Início do projeto Jornada Milhas"));

    app.use(cors());

    app.use(
        express.json(),
        depoimentos,
        destinos
    );
};

export default routes;