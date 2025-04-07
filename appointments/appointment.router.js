const Router = require('express')
const AppointmentRouter = new Router()
const AppointmentController = require('./appointment.controller')


AppointmentRouter.get('/get', AppointmentController.getAllAppointments)
AppointmentRouter.post('/add', AppointmentController.addNewAppointment)
AppointmentRouter.put('/update/:Appointment_id', AppointmentController.updateAppointment)
AppointmentRouter.delete('/delete/:Appointment_id', AppointmentController.deleteAppointment)


module.exports = AppointmentRouter