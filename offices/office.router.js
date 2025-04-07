const Router = require('express')
const OfficeRouter = new Router()
const OfficeController = require('./office.controller')


OfficeRouter.get('/get', OfficeController.getAllOffices)
OfficeRouter.post('/add', OfficeController.addNewOffice)
OfficeRouter.put('/update/:Office_id', OfficeController.updateOffice)
OfficeRouter.delete('/delete/:Office_id', OfficeController.deleteOffice)

module.exports = OfficeRouter