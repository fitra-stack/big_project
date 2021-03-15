const { Router } = require('express')
const { findAll } = require('../controllers/sizes')
// const { authorization } = require('../middlewares/authorization')

const router = Router()

router.get('/', findAll)

module.exports = router