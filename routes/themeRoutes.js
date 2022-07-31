import express from 'express'
import { getPublicThemes, setPublicThemes } from '../controllers/themeControllers.js'

const router = express.Router()

router.get('/theme', getPublicThemes) // pre-avaliable public themes 
router.post('/theme',setPublicThemes) // pre-avaliable public themes 

export default router