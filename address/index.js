import express from 'express'
import get from './services/get'

const router = express.Router()

// GET /address/13470160
router.get('/:cep', get)

export default router