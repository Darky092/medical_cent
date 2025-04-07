const { user } = require('pg/lib/defaults')
const pool = require('../db')



class AppointmentService
{
    async getAllAppointment(){
        const allAppoint = await pool.query(`select d.doctor_name, u.user_name, o.hospital_id, o.office_id, appointment_date from appointments a
	join doctors d on a.doctor_id = d.doctor_id
	join offices o on (a.office_id, a.hospital_id) = (o.office_id,o.hospital_id)
	join users u on a.user_id = u.user_id`)
    return allAppoint
    }
    async addNewAppointment(hospital_id,doctor_id,office_id,user_name,user_number,appointment_date){
        const tryGetDoctorId = await pool.query(`select doctor_id from doctors where doctor_id = $1`, [doctor_id])
        const tryGetOffice = await pool.query (`select office_id, hospital_id from offices where office_id = $1 and hospital_id = $2`,[office_id,hospital_id])
        const tryGetUserId = await pool.query (`select user_id from users where user_name = $1 and user_number = $2`,[user_name,user_number])
        let userId = (await tryGetUserId).rows[0].user_id
        const doctorRowCount = parseInt((await tryGetDoctorId).rowCount);
        const officeRowCount = parseInt(tryGetOffice.rowCount);
        if(doctorRowCount > 0 && officeRowCount> 0 && userId != null)
        {
        const addAppoint = await pool.query(`insert into appointments (hospital_id,doctor_id,office_id,user_id,appointment_date) values ($1,$2,$3,$4,$5) returning *`,[hospital_id,doctor_id,office_id,userId,appointment_date])
        return addAppoint
        }
        else
        {
            return 'не удалось сделать запись'
        }
    }
    async updateAppointment(user_name,user_number,appointment_id){
        const tryGetUserName = await pool.query(`select user_id from users where user_name = $1 and user_number = $2`,[user_name,user_number]) 
        let userId = (await tryGetUserName).rows[0].user_id
        if(userId != undefined){
        const updateAppoint = await pool.query(`update appointments set user_id = $1 where appointment_id = $2 returning *`,[userId,appointment_id])
        return updateAppoint
        }
        else{
            return 'пользователь не найден'
        }
    }
    async deleteAppointment(appointment_id){
        const deleteAppoint = await pool.query(`delete from appointments where appointment_id = $1 returning *`,[appointment_id])
        return deleteAppoint
    }
}
module.exports = new AppointmentService()