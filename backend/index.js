import express from 'express'
import dotenv from 'dotenv'
import AutRoutes from './routes/Auth.js'
import DbCon from './utils/db.js'
import NotesRoutes from './routes/Notes.js'
import cookieParser from 'cookie-parser'

  

dotenv.config()

//mongodb connection here
DbCon()
const PORT = process.env.PORT
const app = express()

app.use(express.json())


 app.use(cookieParser())

app.use('/auth',AutRoutes)
app.use('/notes',NotesRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   
})


