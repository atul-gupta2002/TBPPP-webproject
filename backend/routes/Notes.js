import express from 'express'
import {CreateNotes, Delete, GetNotes, UpdateNotes } from '../controllers/Notes.js'
import { VerificationToken } from '../middlewares/Verificationtoken.js'

const NotesRoutes = express.Router()

NotesRoutes.post('/create',VerificationToken,CreateNotes)
NotesRoutes.put('/update/:id',VerificationToken,UpdateNotes)
NotesRoutes.delete('/delete/:id',VerificationToken,Delete)
NotesRoutes.get('/getnotes',VerificationToken,GetNotes)

export default NotesRoutes