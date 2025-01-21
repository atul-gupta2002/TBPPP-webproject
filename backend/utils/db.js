import mongoose from 'mongoose';

const DbCon=async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log('MONGODB IS CONNECTED');
    }
     catch (error){
        console.log('error in mongodb connection',error);
     }
}

export default DbCon 