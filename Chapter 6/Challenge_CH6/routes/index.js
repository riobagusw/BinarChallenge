const express = require('express')
const router = express.Router()

const user_game = require('./user_game')

router.get('/', (req, res) => {
  res.render('index')
})
  
router.use('/user_game', user_game)

module.exports = router