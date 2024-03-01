import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv'; 
dotenv.config();//to ready .env files 
const serverport = process.env.PORT || 3000;
const app = express();
//Pool is used when you want to connect to your database using environment variables 
import pg from 'pg';
const { Pool } = pg;
import { server } from 'typescript';

//built in method to read parse body, dont need a body parser
app.use(express.json());
// to read encoded data by standard format used by HTML
app.use(express.urlencoded({extended : true}));
// types
//global error handler Object types
interface CustomeErr {
    log: string | number;
    status: number;
    message: string | number;
}
//Serve a static file to client before on initial render

app.use(express.static('dist'))

//setup database connnect string here: postgress
 
const pool = new Pool({
    user: `${process.env.PGUSER}`,
    host: `${process.env.PGHOST}`,
    database: `${process.env.PGDATABASE}`,
    password: `${process.env.PGPASSWORD}`,
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
})

console.log('Tables in the db',await pool.query('SELECT * FROM users'))
//root path generally to test 
app.get('/', (req : Request, res : Response) => {
    res.send('Hello World');
});

app.post('/', (req : Request, res : Response) => {
    const {username, email} = req.body;
    //pool.query('INSERT INTO users (username, email) VALUE ($1, $2) RETURNING *', [username, email])
    res.send(`${username} and ${email} saved in database`);
});


// Catch all error handler 
app.use((req : Request, res: Response) => {
    res.status(404).send('Does not exist.')
})

//Global Error Handling 
app.use((err: Error, req: Request, res: Response, next: NextFunction)=> {
     const defaultErr: CustomeErr = {
        log: 'Express error handler caught middlerwear error',
        status: 400,
        message: `Error occured: ${err}`
     };
     Object.assign({}, defaultErr, err)
     // another suggestion: Object.assign(defaultErr, err) //so this will overwrite inplace and replace overlapping
     
    console.log(defaultErr.log, defaultErr.message);
    res.status(500).send('Internal Server Error');
});

app.listen(serverport, () => console.log(`Server listening on ${serverport}`));