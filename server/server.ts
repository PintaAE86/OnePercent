import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv'; 
dotenv.config();//to ready .env files 
const port = process.env.PORT || 3000;
const app = express();
//Pool is used when you want to connect to your database using environment variables 
import { Pool, Client } from 'pg';
const client = new Client({
    user: 'username',
    host: 'your host',
    database: 'your db',
    port: 5432
});

client.connect((err)=>{
    if(err) throw err;
    console.log('Connected to DB...')
});

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


//root path generally to test 
app.get('/', (req : Request, res : Response) => {
    res.send('Hello World');
});

app.post('/', (req : Request, res : Response) => {
    res.send('Hello PostData');
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

app.listen(port, () => console.log(`Server listening on ${port}`));