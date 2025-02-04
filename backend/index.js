import express from 'express'
import dotenv from 'dotenv'
import AutRoutes from './routes/Auth.js'
import DbCon from './utils/db.js'
import NotesRoutes from './routes/Notes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors';

// OR, if you want to allow only your frontend origin
dotenv.config()
const PORT = process.env.PORT
const app = express()

//mongodb connection here
DbCon()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  // Replace with your frontend URL
}));  


app.use(cookieParser())
app.use(express.json())
app.use('/auth',AutRoutes)
app.use('/notes',NotesRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
})