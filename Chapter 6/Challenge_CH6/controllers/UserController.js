const user_game = require('../models/user_game')
const user_game_biodata = require('../models/user_game_biodata')
const user_game_history = require('../models/user_game_history')

class UserController {
  static findAll(req, res) {
    user_game.findAll({
      include: [{
        model: user_game_biodata, user_game_history
      }],
      order: [['id', 'ASC']]
    })
    .then(user_game => {
      res.render('user/list', user_game)
    })
    .catch(err => {
      console.log(err)
      res.render('/error', err)
    })
  }

  static add_form(req, res) {
    res.render('user_game/add', { user_game: null, err: null })
  }

  static add({ body }, res) {
    user_game.create({...body})
    .then((user_game) => {
      console.log(user_game.dataValues.id);
      return user_game.create({
        userId: user_game.dataValues.id
      })
    })
    .then(() => {
      res.redirect('/user_game')
    })
    .catch(err => {
      console.log(err)
      res.render('user_game/add', { user_game: body, err: err.message })    
    })
  }

  static edit({ params }, res) {
    user_game.findByPk(params.id)
    .then(user_game => {
      res.render('user_game/edit', {user_game, err: null})
    })
    .catch(err => {
      console.log(err)
      res.render('error/error', { err })
    })
  }

  static update({ body, params }, res) {
    const { id } = req.params
    user_game.findByPk(params.id)
    .then(user_game => {
      user_game.firstName = body.firstName,
      user_game.lastName = body.lastName,
      user_game.email = body.email
      user_game.updatedAt = new Date()
      return user_game.save()
    })
    .then(() => {
      res.redirect('/user_game')
    })
    .catch(err => {
      console.log(err)
      res.render('error/error', { err })
    })
  }

  static destroy({ params }, res) {
    user_game.destroy({
      where: { id: params.id }
    })
    .then(() => {
      res.redirect('/user_game')
    })
    .catch(err => {
      console.log(err)
      res.render('error/error', { err })
    })
  }
}

module.exports = UserController