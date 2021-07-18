const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const morgan = require('morgan')
const path = require("path")

const index = require('./public/routes/index')
const API = require('./public/routes/API')

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.static(path.join(__dirname, "/app")))

app.use('/', index)
app.use('/v1/posts', API)
app.use('/', (req, res) => {
    res.status(400)
    res.render('../public/views/error')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })