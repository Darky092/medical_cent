const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const createTables = require('./db/setup_Hospital')
const pool = require('./db/index')
const userRouter = require('./users/user.router')
const doctorRouter = require('./doctors/doctors.router')
const hospitalRouter = require('./hospitals/hospital.router')
const officeRouter = require('./offices/office.router')
const AppointmentRouter = require('./appointments/appointment.router')


app.use(express.json());
app.use('/api/users', userRouter)
app.use('/api/doctors', doctorRouter)
app.use('/api/hospitals', hospitalRouter)
app.use('/api/offices', officeRouter)
app.use('/api/appointments', AppointmentRouter)


async function initializeApp(){
    try{
        await createTables(pool)
        app.listen(PORT,() => {
        console.log(`server is running on port ${PORT}`);
        })
    }
    catch(error){
        console.error('error inicialize app:', error.message)
    }

}
initializeApp();
