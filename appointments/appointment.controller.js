const AppointmentService = require('./appointment.service')



class AppointmentController
{
    async getAllAppointments(req,res){
        try{
            const appointment = await AppointmentService.getAllAppointment()
            res.json(appointment.rows)
        }catch(error)
        {
            console.error('error:', error.messge)
        }
    }
    async addNewAppointment(req,res){
        const {Hospital_id,Doctor_id,Office_id,User_name,User_number,Appointment_date} = req.body
        try{
            const appointment = await AppointmentService.addNewAppointment(Hospital_id,Doctor_id,Office_id,User_name,User_number,Appointment_date)
            res.json(appointment.rows)
        }
        catch(error){
            console.log(Hospital_id,Doctor_id,Office_id,User_name,User_number,Appointment_date)
            console.error('error:', error.messge)
        }

    }
    async updateAppointment(req,res){
        const {User_name,User_number} = req.body
        const {Appointment_id} = req.params
        try{
            const appointment = await AppointmentService.updateAppointment(User_name,User_number,Appointment_id)
            res.json(appointment.rows)
        }catch(error){
            console.error('error', error.messge)
        }
    }
    async deleteAppointment(req,res){
        const {Appointment_id} = req.params
        try{
            const appointment = await AppointmentService.deleteAppointment(Appointment_id)
            res.json(appointment.rows)
        }catch(error){
            console.error('error', error.messge)
        }
    }
}
module.exports = new AppointmentController()