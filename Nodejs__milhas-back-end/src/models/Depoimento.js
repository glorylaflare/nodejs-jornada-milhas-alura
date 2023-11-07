import mongoose from "mongoose";

const depoimentoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    imagem: { 
        type: String,
        required: [true, "Uma imagem do(a) autor(a) é necessária."]
    },
    depoimento: { 
        type: String,
        required: [true, "Deve ser inserido o depoimento do usuário."]
    },
    autor: { 
        type: String,
        required: [true, "O nome do(a) autor(a) deve ser disponibilizado."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, 
{
    versionKey: false
});

const depoimento = mongoose.model("depoimentos", depoimentoSchema);

export default depoimento;
