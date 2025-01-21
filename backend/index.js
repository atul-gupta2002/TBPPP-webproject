import express from 'express'
import dotenv from 'dotenv'
import AutRoutes from './routes/Auth.js'
import DbCon from './utils/db.js'

dotenv.config()

//mongodb connection here
DbCon()
const port = process.env.PORT
const app = express()

app.use(express.json())


app.use('/auth',AutRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Server is running on port ${port}')
})