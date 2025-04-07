const pool = require('../db')

class HospitalService
{
    async getAllHospitals(){
        const getAllHosp = pool.query(`select hospital_id,house,city,street from hospitals`)
        return getAllHosp
    }
    async addNewHospital(House, City, Street){
        const addNewHosp = pool.query(`Insert into Hospitals (House, City, Street) values ($1,$2,$3) returning *`,[House,City,Street])
        return addNewHosp
    }
    async updateHospital(Hospital_id, city){
        const updateHosp = pool.query(`update hospitals set city = $1 where hospital_id = $2 returning *`, [city, Hospital_id])
        return updateHosp
    }
    async deleteHospital(Hospital_Id, city){
        const deleteHosp = pool.query(`delete from hospitals where hospital_id = $1 and city = $2 returning *`,[Hospital_Id,city])
        return deleteHosp
    }

}
module.exports = new HospitalService()