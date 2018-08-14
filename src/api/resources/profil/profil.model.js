import mongoose from "mongoose"

const { Schema } = mongoose

const profilSchema = new Schema({

user:{
    type: Schema.Types.ObjectId,
    ref: "users"
},

prenom: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    avatar:{
        type:String
    },
    phone: {
        type: Number,
        required: true
    },
    
    region: {
        type: String,
        required: true
    },
    ville : {
        type: String,
        required: true
    },
    codePostal: {
        type: String,
        required: true
    },
    rue: {
        type: String,
        required: true
    }

})



export default mongoose.model("Profil", profilSchema)