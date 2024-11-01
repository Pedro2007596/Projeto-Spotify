import mongoose, {mongo} from "mongoose";

const astistaSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, require: true},
    bio: {type: String},
    genres: {type: String}
})

const artista = mongoose.model('artistas', astistaSchema);

export default artista;