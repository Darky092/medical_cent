const Router = require('express')
const HospitalRouter = new Router()
const HospitalController = require('./hospital.controller')


HospitalRouter.get('/get', HospitalController.getAllHospitals)
HospitalRouter.post('/add', HospitalController.addNewHospital)
HospitalRouter.put('/update/:Hospital_id', HospitalController.updateHospital)
HospitalRouter.delete('/delete/:Hospital_id', HospitalController.deleteHospital)



module.exports = HospitalRouter