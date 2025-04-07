const officeService = require('./office.service')





class OfficeController
{
    async getAllOffices(req,res){
        try{
        const office = await officeService.getAllOffice()
        res.json(office.rows)
        }catch(error){
            console.log(error)
        }
    }
    async addNewOffice(req,res){
        const{Hospital_id,Doctor_id,Office_id} = req.body
        try{
        const office = await officeService.addNewOffice(Hospital_id,Doctor_id,Office_id)
        res.json(office.rows)
        }catch(error){
            console.log(error)
        }
    }
    async updateOffice(req,res){
        const{Office_id} = req.params
        const{Doctor_id,Hospital_id} = req.body
        try{
        const office = await officeService.updateOffice(Office_id,Doctor_id,Hospital_id)
        res.json(office.rows)    
        }catch(error){
            console.log(error)
        }
    }
    async deleteOffice(req,res){
        const{Office_id} = req.params
        const{Hospital_id} = req.body
        try{
        const office = await officeService.deleteOffice(Office_id,Hospital_id)
        res.json(office.rows)
        }catch(error){
            console.log(error)
        }
    }
}
module.exports = new OfficeController()