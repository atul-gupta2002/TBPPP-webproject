import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    userId: {
        type: String
    },
},{
    timestamps: true
})


const NotesModel=mongoose.model("Notes",NoteSchema)

export default NotesModel