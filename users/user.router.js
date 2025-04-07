const Router = require('express')
const UserRouter = new Router()
const UserController = require('./user.controller')

UserRouter.get('/get', UserController.getAllUser)
UserRouter.post('/add', UserController.addNewUser)
UserRouter.put('/update', UserController.updateUser)
UserRouter.delete('/delete', UserController.deleteUser)

module.exports = UserRouter