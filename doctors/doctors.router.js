const Router = require('express')
const DoctorRouter = new Router()
const DoctorController = require('./doctors.controller')

DoctorRouter.get('/get', DoctorController.getAllDoctors)
DoctorRouter.post('/add', DoctorController.addNewDoctor)
DoctorRouter.put('/update/:Doctor_id', DoctorController.updateDoctor)
DoctorRouter.delete('/delete/:Doctor_id', DoctorController.deleteDoctor)

module.exports = DoctorRouter
