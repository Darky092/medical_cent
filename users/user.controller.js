const pool = require('../db')
const UserService = require('./user.service')



class UserController{

    async getAllUser(req,res) {
            try{
                const users = await UserService.getAllUsers();
                res.json(users.rows)
            } catch (error) {
                console.log(error)
            }
        }

    async addNewUser(req,res){
        const {User_name,User_number,User_surname, User_patronymic, Password} = req.body
        try{
 
            const users = await UserService.addNewUser(User_name,User_number,User_surname,User_patronymic,Password)
            res.json (users.rows)
        }
        catch(error){
            console.log(error)
        }
    }
    async updateUser(req,res){
        const {User_name, Password} = req.body
        try{
            const users = await UserService.updateUser(User_name,Password)
            res.json (users.rows)

        }catch(error){
            console.log(error)
        }
    }
    async deleteUser(req,res){
        const {User_name} = req.body
        try{
            const users = await UserService.deleteUser(User_name)
            res.json(users.rows)

        }
        catch(error){
            console.log(error)
        }
    }
    

}
module.exports = new UserController(); 