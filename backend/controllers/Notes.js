import mongoose from 'mongoose'; 
import NotesModel from '../models/Notes.js';


const CreateNotes=async(req,res)=>{
    try {
        const userId=req.userId
        const {title}=req.body;
        if(!title){
            return res.status(303).json({success:false,message:"Title are required"})
        }
        const CreateNotes= new NotesModel({
            title,userId:userId
        })
        await CreateNotes.save()
        res.status(200).json({success:true,message:"Notes created Successfully",Notes:CreateNotes})
    } catch (error) {
       
    }
}

const UpdateNotes = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        console.log("Request Params:", req.params);
        console.log("User ID from Token:", req.userId);

        // Validate the note ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Note ID' });
        }

        // Fetch the note
        const note = await NotesModel.findOne({ _id: id });
        console.log("Fetched Note:", note);

        if (!note) {
            return res.status(404).json({ success: false, message: 'Note not found' });
        }

        // Check if the user is authorized to update the note
        if (note.userId.toString() !== req.userId.toString()) {
            return res.status(403).json({ success: false, message: 'Access denied' });
        }

        // Update the note title
        note.title = title;
        await note.save();

        return res.status(200).json({ success: true, message: 'Note updated successfully', note });

    } catch (error) {
        console.error("Error updating note:", error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const Delete=async(req,res)=>{
    try {
        const userId=req.userId
        const NotesId=req.params.id
        const FindeNotes=await NotesModel.findById(NotesId)

        if (userId.toString() !== FindeNotes.userId.toString()) {
       return res.status(404).json({success:false,message:"Unauthorized user",})
            
        }
        const Delete=await NotesModel.findByIdAndDelete(NotesId)


              res.status(200).json({success:true,message:"Notes Deleted Successfully",Delete})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error",})
    }
}
const GetNotes=async(req,res)=>{
    try {
        const userId=req.userId
        
        const Notes=await NotesModel.find({userId})


        res.status(200).json({success:true,Notes})
        console.log(error)
        res.status(500).json({success:false,message:"Internal Server Error",})
    } catch (error) {
        
    }
}
export {CreateNotes,UpdateNotes,Delete,GetNotes}