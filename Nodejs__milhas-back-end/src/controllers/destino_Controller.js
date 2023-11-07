import { destino } from "../models/index.js";

class DestinoController {

    //GET
    static async listarDestinos(req, res) {
        try {
            const destinosResultado = await destino.find({});
            res.status(200).json(destinosResultado);
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }

    static async listarDestinoPorNome(req, res) {
        const nome = req.query.nome;
        try {
            const destinosPorNome = await destino.find({ nome: nome });
            if(!destinosPorNome.length) {
                res.status(200).json({
                    mensagem: "Nenhum destino foi encontrado"
                })
            } else {
                res.status(200).json({
                    destinosPorNome,
                    mensagem: "O destino foi encontrado com sucesso!"
                })
            }
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }

    //POST
    static async criarDestino(req, res) {
        try {
            const destinoCriado = await destino.create(req.body)
            res.status(201).json({
                destinoCriado,
                mensagem: "O destino foi criado com sucesso!"
            });
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }

    //PUT
    static async atualizarDestino(req, res) {
        try {
            const id = req.params.id;
            await destino.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                mensagem: "O destino foi atualizado com sucesso!"
            })
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }  
    }

    //DELETE
    static async excluirDestino(req, res) {
        try {
            const id = req.params.id;
            await destino.findByIdAndDelete(id);
            res.status(200).json({
                mensagem: "O destino foi removido com sucesso."
            })
        } catch (error) {
            res.status(500).json({
                mensagem: `FALHOU!...${error.message}.`
            });
        }
    }
}

export default DestinoController;