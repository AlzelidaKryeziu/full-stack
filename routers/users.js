const router = require('express').Router()

const{getUsers} = require('../controllers/users')

const validateData = require('../middlewares/validateData')

router.get('/', getUsers);

router.get('/', validateData, getUsers)

module.exports = router