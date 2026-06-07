const express = require('express')
const Router = express.Router()
const userController = require('../controller/userController')

Router.post('/create', userController.createUser)
Router.get('/read', userController.readUsers)
Router.put('/update/:id', userController.updateUser)
Router.delete('/delete/:id', userController.deleteUser)


module.exports = Router