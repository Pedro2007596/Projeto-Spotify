import mongoose, {mongo} from "mongoose";

const astistaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, require: true},
    genero: {type: String},
    sobre: {type: String}
})

const artista = mongoose.model('artistas', astistaSchema);

export default artista;