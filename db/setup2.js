const { Query } = require("pg");
async function createTables(pool) 
{
    const createGenreTable = `
    CREATE TABLE IF NOT EXISTS Genres(
    Genre_Id SERIAL PRIMARY KEY,
    Genre VARCHAR(255) NOT NULL
    )
    `;
    const createFilmsTable = `
    CREATE TABLE IF NOT EXISTS films (
    Film_Id SERIAL PRIMARY KEY,
    Film_Name VARCHAR(100) NOT NULL,
    Genre_Id INT NOT NULL,
    FOREIGN KEY (Genre_Id) REFERENCES Genres (Genre_Id)
    )
    `;


    const createUserTable = `
    CREATE TABLE IF NOT EXISTS users (
    User_id SERIAL PRIMARY KEY,
    userName VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    Film_Id INT NOT NULL,
    FOREIGN KEY (Film_Id) REFERENCES films (Film_Id)
    )
    `;
    
    await pool.query(createGenreTable);
    console.log('table has been created')
 
   
    await pool.query(createFilmsTable);
    console.log('table has been created 2')
 
   
    await pool.query(createUserTable);
    console.log('table has been created 3')


    






}
module.exports = createTables;