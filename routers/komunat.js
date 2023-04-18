const router = require('express').Router()

const{getKomunat} = require('../controllers/komunat')

router.get('/', getKomunat);

module.exports = router