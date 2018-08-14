import mongoose from 'mongoose'
const {Schema} = mongoose

const platSchema = new Schema({


    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        
    },
    // photo: {
    //     type:file
    // }
})

export default mongoose.model("Plat", platSchema)