const { Router } = require('express')
const { findById, update, destroy } = require('../controllers/orders')
const { authorization } = require('../middlewares/authorization')

const router = Router()

router.get('/:id', findById)
router.patch('/', authorization, update)
router.delete('/:id', authorization, destroy)

module.exports = router