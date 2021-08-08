const user_games = require('express').Router()
const UserController = require('../controllers/UserController')

user_games.get('/', UserController.findAll)
user_games.get('/add', UserController.add_form)
user_games.post('/add', UserController.add)
user_games.get('/edit/:id', UserController.edit)
user_games.post('/edit/:id', UserController.update)
user_games.get('/delete/:id', UserController.destroy)

module.exports = user_games