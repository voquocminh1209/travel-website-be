const router = require("express").Router()
const verifyToken = require("../middleware/auth")
const authController = require('../controllers/auth.controller')

router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.post('/refresh-token', authController.refreshToken)

module.exports = router