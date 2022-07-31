import express from 'express'
import { login, signup } from '../controllers/authControllers.js'
import { setTheme} from '../controllers/themeControllers.js'
import protect from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/theme', protect, setTheme) // personal theme

export default router