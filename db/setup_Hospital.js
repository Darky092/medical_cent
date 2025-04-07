const Query = require("pg");





async function createHospitalTables(pool)
{
const UserTable = `create table if not exists Users
(
User_Id serial primary key,
User_number varchar(256) not null,
User_Name varchar(256) not null ,
User_Surname varchar(256), 
User_Patronymic varchar(256),
Password varchar(256) not null
)`;


const DoctorTable = `create table if not exists Doctors
(
Doctor_Id serial primary key,
Doctor_Number varchar(256) not null,
Doctor_Name varchar(256) not null,
Doctor_Surname varchar(256) not null,
Doctor_Patronymic varchar(256) not null,
Specialization varchar(256) not null
)`;


const HospitalTable = `create table if not exists Hospitals
(
Hospital_ID serial primary key,
street varchar(256) not null,
city varchar(256) not null,
house varchar(256) not null
)`;


const OfficeTable = `create table if not exists offices (
office_id int not null,          
doctor_id int not null,                   
hospital_id int not null,        
primary key (hospital_id, office_id),
foreign key (doctor_id) references doctors(doctor_id),
foreign key (hospital_id) references hospitals(hospital_id)
)`;


const AppointmentTable = `create table if not exists appointments (
appointment_id serial primary key,
hospital_id int not null,
doctor_id int not null,
office_id int not null,
user_id int not null,
appointment_date timestamp not null,
foreign key (doctor_id) references doctors(doctor_id),
foreign key (user_id) references users(user_id),
foreign key (hospital_id) references hospitals(hospital_id),
foreign key (office_id, hospital_id) references offices(office_id, hospital_id)
)`;


const indexes = `create index if not exists idx_appointment_hospital_id on appointments(hospital_id);
create index if not exists idx_appointment_doctor_id on appointments(doctor_id);
create index if not exists idx_appointment_date on appointments(appointment_date);`

try
{
    await pool.query(UserTable)
    console.log('таблица пользователя была создана')
}
catch(error)
{
    console.error('таблица пользователя не была создана', error.message)
}
try
{
    await pool.query(DoctorTable)
    console.log('таблица докторы создана ')
}
catch(error)
{
    console.error('таблица докторы не создана ', error.message)
}
try
{
    await pool.query(HospitalTable)
    console.log('таблица с больницами была создана')
}
catch(error)
{
    console.error('таблица с больницами не была создана', error.message)
}
try
{
    await pool.query(OfficeTable)
    console.log('таблица с офисами была создана')
}
catch(error)
{
    console.error('таблица с офисами не была создана',error.message)
}
try
{
    await pool.query(AppointmentTable)
    console.log('таблица с записями была создана')
}
catch(error)
{
    console.error('таблица с записями не была создана', error.message)
}
try
{
    await pool.query(indexes)
    console.log('индексы были созданы')
}
catch(error)
{
    console.error('индексы не были созданы', error.message)
}
}
module.exports = createHospitalTables;