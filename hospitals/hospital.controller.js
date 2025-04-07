const pool = require('../db')
const HospitalService = require('./hospital.service')



class HospitalController 
{
async getAllHospitals(req,res){
    try{
     const hospital = await HospitalService.getAllHospitals()
     res.json(hospital.rows)   
    }catch(error){
        console.log(error)
    }
}
async addNewHospital(req,res){
    const{House,City,Street} = req.body
    try{
        const hospital = await HospitalService.addNewHospital(House,City,Street)
        res.json(hospital.rows)
    }catch(error) {
        console.log(error)
    }
}
async updateHospital(req,res){
    const {Hospital_id} = req.params
    const {City} = req.body
    try{
        const hospital = await HospitalService.updateHospital(Hospital_id, City)
        res.json(hospital.rows)
    }catch(error){
        console.log(error)
    }
}
async deleteHospital(req,res){
    const {Hospital_id} = req.params
    const {City} = req.body
    try{
        const hospital = await HospitalService.deleteHospital(Hospital_id, City)
        res.json(hospital)
    }catch(error){
        console.log(error)
    }
}

}
module.exports = new HospitalController()