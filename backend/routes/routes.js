const { Router } = require('express')

const controllers = require('../controllers/controller.js')

const router = Router()

router.post('/', controllers.registrationUser)

module.exports = router