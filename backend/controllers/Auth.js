import UserModel from "../models/Auth.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const Register = async (req, res) => {
    try{
        const {userName,email,password} = req.body
        if(!userName || !email || !password){
            return res.status(303).json({success:false,message:'Please fill all the fields'})
        }

        const existingUser = await UserModel.findOne({email})
        if(existingUser){
            return res.status(303).json({success:false,message:'User already exists,please Login'})
        }

        const hashedPassword = await bcrypt.hashSync(password,10)
        const NewUser = new UserModel({
            userName,email,password:hashedPassword
        })
        NewUser.save()
        res.status(200).json({success:true,message:'User registered successfully',User:NewUser})
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error'})
       
    }
}

const Login = async(req, res) => {
    try{
        const {email,password} = req.body
        const FindUser = await UserModel.findOne({email})
        if(!FindUser){
            return res.status(404).json({success:false,message:'User does not exist,please register'})
        }
        const comparePassword =await bcrypt.compare(password,FindUser.password)
        if(!comparePassword){
            return res.status(303).json({success:false,message:'Invalid password provided'})
        }

        const token = await jwt.sign({userId:FindUser._id},process.env.SecretKey,{expiresIn:'3d'})
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:38*24*3600*1000
        })

        res.status(200).json({success:true,message:'User logged in successfully',user:FindUser,
            token

        })

    }catch(error){
        console.log(error)
        res.status(500).json({success:false,message:'Internal server error'})
       
    }
}
const Logout = async (req, res) => {
    try {
        // Clear the 'token' cookie
        res.clearCookie('token');
        
        // Send a response indicating the user has logged out
        res.status(200).json({ success: true, message: 'User logged out successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


export {Register,Login,Logout}