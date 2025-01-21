import express from 'express'
import { Register } from '../controllers/Auth.js';

const AutRoutes  = express.Router();
AutRoutes.post('/register',Register)


export default AutRoutes