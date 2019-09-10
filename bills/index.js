import express from 'express'
import create from './services/create'
import remove from './services/remove'
import list from './services/list'
import get from './services/get'
import update from './services/update'


const router = express.Router()

// GET /bills/
router.get('/', list)
// GET /bills/11257fg
router.get('/:id', get)
// POST /bills/
router.post('/', create)
// DELETE /bills/12qfs32
router.delete('/:id', remove)
// PUT /bills/asd23c
router.put('/:id', update)


export default router