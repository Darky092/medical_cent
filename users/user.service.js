const pool = require('../db')

class UsersService
{
    async getAllUsers(){
        const allUsers = await pool.query(`select user_id,user_number,user_name,password,user_surname,user_patronymic from users`)
        return allUsers
    }

    async addNewUser(userName, User_number ,userSurname, userPatronymic, password){
        if (userSurname == null && userPatronymic == null){
        const newUser = await pool.query(`insert into users (user_name,user_number,password) values ($1,$2,$3) returning *`,[userName,User_number,password])
        return newUser
        }
        else if(userPatronymic == null){
        const newUser = await pool.query(`insert into users (user_name,user_number,password,user_surname) values ($1,$2,$3,$4) returning *`,[userName,User_number,password,userSurname])
        return newUser
        }
        else if (userSurname == null){
        const newUser = await pool.query(`insert into users (user_name,user_number,password,user_patronymic) values ($1,$2,$3,$4) returning *`,[userName,User_number,password,userPatronymic])
        return newUser
        }
        else{
        const newUser = await pool.query(`insert into users (user_name, user_number, password, user_surname, user_patronymic) values ($1,$2,$3,$4,$5) returning *`,[userName,User_number,password,userSurname,userPatronymic])
        return newUser
        }
        
    }
    async updateUser(UserName, password){
        const updateUs = await pool.query(`UPDATE users SET password = $1 where user_name = $2 RETURNING *`,[password,UserName])
        return updateUs
    }
    async deleteUser(Username){
        const deleteUs = await pool.query(`delete from users where user_name = $1 returning *`,[Username])
        return deleteUs
    }

}
module.exports = new UsersService() 