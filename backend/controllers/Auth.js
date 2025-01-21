import UserModel from "../models/Auth.js"

const Register = async (req, res) => {
    try{
        const {userName,email,password} = req.body
        const existingUser = await UserModel.findOne({email})
        if(existingUser){
            return res.status(303).json({success:false,message:'User already exists,please Login'})
        }
        const NewUser = new UserModel({
            userName,email,password
        })
        NewUser.save()
        res.status(200).json({success:true,message:'User registered successfully',User:NewUser})
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error'})
       
    }
}

export {Register}