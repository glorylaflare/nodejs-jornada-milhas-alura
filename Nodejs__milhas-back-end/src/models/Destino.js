import mongoose from "mongoose";

const destinoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    imagens: {
        foto_1: { type: String,  required: [true, "Ao menos a imagem principal deve ser obrigatória."] },
        foto_2: { type: String, required: [true, "A imagem secundária também é obrigatória."] }
    },
    nome: { 
        type: String,
        required: [true, "O nome do destino deve ser disponibilizado."]
    },
    preco: { 
        type: Number,
        required: [true, "Um valor deve ser informado."]
    },
    metas: {
        type: String,
        required: [true, "Um mini-texto deve ser informado."],
        maxLength: 160
    },
    texto_descritivo: {
        type: String,
        maxLength: 250
    }
}, 
{
    versionKey: false
});

const destino = mongoose.model("destinos", destinoSchema);

export default destino;
