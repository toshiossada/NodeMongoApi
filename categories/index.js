import express from 'express'
import create from './services/create'
import list from './services/list'
import update from './services/update'
import get from './services/get'

const router = express.Router();


// GET /categories
router.get('/', list)
// GET /categories/4sf4sg5
router.get('/:id', get)
// PUT /categories/asd23c
router.put('/:id', update)
// POST /categories
router.post('/', create)

export default router