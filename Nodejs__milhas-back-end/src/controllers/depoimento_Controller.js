import { depoimento } from "../models/index.js";

class DepoimentoController {

    //GET
    static async listarDepoimentos(req, res) {
        try {
            const depoimentosResultado = await depoimento.find({});
            res.status(200).json(depoimentosResultado);
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }

    static async depoimentosHome(req, res) {
        try {
            const depoimentosDaHome = await depoimento.find({}).sort({ createdAt: -1 }).limit(3);
            res.status(200).json(depoimentosDaHome);
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }

    //POST
    static async criarDepoimento(req, res) {
        try {
            const depoimentoCriado = await depoimento.create(req.body)
            res.status(201).json({
                depoimentoCriado,
                mensagem: "O depoimento foi criado com sucesso!"
            });
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }

    //PUT
    static async atualizarDepoimento(req, res) {
        try {
            const id = req.params.id;
            await depoimento.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                mensagem: "O depoimento foi atualizado com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }  
    }

    //DELETE
    static async excluirDepoimento(req, res) {
        try {
            const id = req.params.id;
            await depoimento.findByIdAndDelete(id);
            res.status(200).json({
                mensagem: "O depoimento foi removido com sucesso."
            })
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }
}

export default DepoimentoController;