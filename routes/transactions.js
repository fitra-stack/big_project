const { Router } = require('express')
const { findAll, findById } = require('../controllers/transactions')
// const { authorization } = require('../middlewares/authorization')

const router = Router()

router.get('/', findAll)
router.get('/:id', findById)

module.exports = router