const { Query } = require("pg");

async function createTables (pool) 
{
   
    const createUserTable = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    const  createPostTable = `
    CREATE TABLE IF NOT EXISTS  posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    body TEXT,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    const createBiblioTable =`
    CREATE TABLE IF NOT EXISTS libraryies (
    Library_Id SERIAL PRIMARY KEY,
    Library_Title VARCHAR(255) NOT NULL)
    `;

    const createBooks = `CREATE TABLE IF NOT EXISTS Books
    (
    Library_id INT NOT NULL,
    Book_Title VARCHAR(255) NOT NULL,
    Autor_Id INT NOT NULL,
    Genre_Id INT NOT NULL,
    Status VARCHAR(255),
    PRIMARY KEY (Book_Title),
    FOREIGN KEY (Library_id) REFERENCES libraryies (Library_id),
    FOREIGN KEY (Autor_Id) REFERENCES Autors (Autor_Id),
    FOREIGN KEY (Genre_Id) REFERENCES Genres (Genre_id)
    )`
    const createAutorsTable = `CREATE TABLE IF NOT EXISTS Autors
    (
    Autor_Id SERIAL PRIMARY KEY,
    Autor VARCHAR(255) NOT NULL
    ) `
    const createGenreTable = `CREATE TABLE IF NOT EXISTS Genres(
    Genre_Id SERIAL PRIMARY KEY,
    Genre VARCHAR(255) NOT NULL
    )`

    //const createGG = `INSERT INTO genres (genre) VALUES ('dds') RETURNING genre_id`
    const getall = `SELECT * FROM genres `
    await pool.query(createUserTable);
    console.log('user table created');

    await pool.query(createPostTable);
    console.log('post table created');

    await pool.query(createBiblioTable);
    console.log('biblio table created');

    await pool.query(createAutorsTable);
    console.log('autors table created');

    await pool.query(createGenreTable);
    console.log('genre table created');

    await pool.query(createBooks);
    console.log('Bookstable created')
    //const x = await pool.query(createGG);
    //const x_id = x.rows[0].genre_id;
    //console.log(x)
    //console.log(x_id)
    //const tryGetAutorID = await pool.query(`SELECT genre_id FROM genres WHERE genre = 'adsf'`)
            //const getGenreId = tryGetAutorID.rows.length
            //let genre_id ='';
            //if (getGenreId == 0){
                //const genreRow = await pool.query(`INSERT INTO genres (genre) VALUES ('adsf') RETURNING genre_id`);
                //genre_id = parseInt(genreRow.rows[0].genre_id)
            //}
            //else{
                //genre_id = tryGetAutorID.rows[0].genre_id
            //}
            //console.log(genre_id)
            //console.log(getGenreId)

    
    
   

}
module.exports = createTables;

