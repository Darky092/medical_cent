const pool = require('../db');
const DoctorService = require('./doctors.service')


class DoctorController 
{
    async getAllDoctors(req,res){
        try{
            const doctors = await DoctorService.getAllDoctors();
            res.json(doctors.rows)
        } catch (error) {
            console.log(error)
        }
    }
    async addNewDoctor(req,res){
        const {Doctor_name, Doctor_number,Doctor_surname, Doctor_Patronymic,Specialization} = req.body
        try{
            const doctors = await DoctorService.addNewDoctor(Doctor_name, Doctor_number,Doctor_surname, Doctor_Patronymic,Specialization)
            res.json(doctors.rows)
        }catch(error){
            console.log(error)
        }
    }
    async updateDoctor(req,res){
        const {Doctor_name, New_doctor_name} = req.body
        const {Doctor_id} = req.params
        try{
        const doctors = await DoctorService.updateDoctor(Doctor_id,Doctor_name,New_doctor_name)
        res.json(doctors.rows)
        }catch(error){
            console.log(error)
        }
    }
    async deleteDoctor(req,res){
        const {Doctor_id} = req.params
        const {Doctor_name} = req.body
        try{
            const doctors = await DoctorService.deleteDoctor(Doctor_id,Doctor_name)
            res.json(doctors.rows)
        }
        catch(error){
            console.log(error)
        }
    }
}
module.exports = new DoctorController()
