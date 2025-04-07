const pool = require('../db')


class DoctorService
{
    async getAllDoctors(){
        const allDocs = await pool.query(`select Doctor_Id ,Doctor_name, Doctor_number,Doctor_surname, Doctor_Patronymic,Specialization from doctors`)
        return allDocs
    }
    async addNewDoctor(Doctor_name, Doctor_number,Doctor_surname, Doctor_Patronymic,Specialization){
        const newDoc = await pool.query(`INSERT INTO Doctors (Doctor_name, Doctor_number,Doctor_surname, Doctor_Patronymic,Specialization) values ($1,$2,$3,$4,$5) returning *`,[Doctor_name, Doctor_number,Doctor_surname, Doctor_Patronymic,Specialization])
        return newDoc
    }
    async updateDoctor(Doctor_Id,Doctor_name,New_doctor_name){
        const updateDoc = await pool.query(`Update doctors set Doctor_name = $1 where Doctor_name = $2 and Doctor_Id = $3 returning *`,[New_doctor_name,Doctor_name,Doctor_Id])
        return updateDoc
    }
    async deleteDoctor(Doctor_Id,Doctor_name){
        const delDoc = await pool.query(`delete from doctors where doctor_id = $1 and doctor_name = $2 returning *`, [Doctor_Id, Doctor_name])
        return delDoc
    }
}
module.exports = new DoctorService()