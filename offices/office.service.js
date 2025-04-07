const pool = require('../db')



class OfficeService
{
    async getAllOffice()
    {
        const getAllOff = await pool.query(`select doctor_name, office_id, hospital_id from offices o
			join doctors d on o.doctor_id = d.doctor_id`)
        return getAllOff
    }
    async addNewOffice(hospital_id,doctor_id,office_id)
    {   const tryGetHospitalId = await pool.query(`select Hospital_id from Hospitals where Hospital_id = $1`, [hospital_id])
        const tryGetDoctors = await pool.query(`select Doctor_id from doctors where doctor_id = $1`,[doctor_id])
        let rowsLengthHosp = parseInt(tryGetHospitalId.rows.length)
        let rowsLengthDoc = parseInt(tryGetDoctors.rows.length)
        if (rowsLengthDoc == 0)
        {
            return 'doctor undefined'
        }
        if (rowsLengthHosp == 0)
        {
            return 'hospital undefined'
        }
        if (rowsLengthDoc > 0 && rowsLengthHosp > 0)
        {
            const addNewOff = await pool.query(`Insert into offices (doctor_id,hospital_id,office_id) values ($1,$2,$3) returning *`,[doctor_id,hospital_id,office_id])
            return addNewOff
        }
        
    }
    async updateOffice (office_id,doctor_id,hospital_id){
        const tryGetDoctor_id = await pool.query(`select doctor_id from doctors where doctor_id = $1`,[doctor_id])
        let idLenght = parseInt(tryGetDoctor_id.rows.length)
        if(idLenght > 0){
        const updateOff = await pool.query(`Update offices set doctor_id = $1 where office_id = $2 and hospital_id = $3 returning *`,[doctor_id,office_id,hospital_id])
        return updateOff
        }
        else{        
            return 'doctor undefined'
        }
        
    }
    async deleteOffice(office_id,hospital_id){
        const deleteOff = await pool.query(`delete from offices where office_id = $1 and hospital_id = $2 returning *`,[office_id,hospital_id])
        return deleteOff
    }
}
module.exports = new OfficeService()