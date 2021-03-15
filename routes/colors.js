const { Router } = require('express')
const { findAll} = require('../controllers/colors')
// const { authorization } = require('../middlewares/authorization')

const router = Router()

router.get('/', findAll)

module.exports = router