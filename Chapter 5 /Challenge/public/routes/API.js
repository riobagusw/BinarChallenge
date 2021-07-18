const express = require('express')
const router = express.Router()
const db = require('../data/post.json')

router.get('/', (req, res) => {
    res.status(200)
    res.json(db)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const found = db.find(post => post.id === Number(id))
    res.status(200)
    res.json(found)
})

router.post('/', (req, res) => {
    const { title, body, userId } = req.body
    const newId = db.length + 1
    const newPost = {
        id: newId,
        title,
        body,
        userId,
    }
    db.push(newPost)
    res.json(newPost)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const found = db.find(post => post.id === +id)
    if (found) {
        db = db.filter(post => post.id !== +id)
        res.json({
            status:{
                code: 200,
                success: true,
            },
            errorCode: '',
        })
    } else {
        res.json({
            status:{
                code: 404,
                success: false,
            },
            errorCode: 'No data found',
        })
    }
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { title, body, userId } = req.body
    const found = db.find(post => post.id === +id)
    if (found) {
        const newData = {
            ...found,
            title,
            userId,
            body,
        }
        db.map((post) => post.id === +id ? newData : post)
        res.json({
            status:{
                code: 200,
                success: true,
            },
            errorCode: '',
        })
    } else {
        res.json({
            status:{
                code: 404,
                success: false,
            },
            errorCode: 'No data found',
        })
    }
})

module.exports = router