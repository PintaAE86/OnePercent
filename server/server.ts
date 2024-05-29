import dotenv from 'dotenv'; 
dotenv.config();//to ready .env files 

import express, {NextFunction, Request, Response} from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const serverport = process.env.PORT || 3000;
const app = express();
import session from 'express-session';

//Serve a static file to client before on initial render
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//-------> Importing Routes <-------
import routerAuth from "./routes/userRoute.ts";
import routerGoals from "./routes/goalsRoute.ts";

//------> Type Definitions <--------
interface CustomeErr {
    log: string | number;
    status: number;
    message: string | number;
}

//----> Third party middleWear <-------

//built in method to read parse body, dont need a body parser
app.use(express.json());
// to read encoded data by standard format used by HTML
app.use(express.urlencoded({extended : true}));

app.use(session({
    name : 'session_name', //name of session id cookie
    secret: 'keyboard_cat', //used to sign the session cookie
    resave: false, //forces teh session to be resaved back to the session store if not modified
    saveUninitialized: false, //forces a new session to be saved when it is created new
    cookie: {
        secure : false,
        maxAge : 1000 * 60 * 60 * 24 // 1000 milliesec x 60 sec x 60 min x 24 hrs
    }
}));

// --------> Serving Static Files <----------
// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, '..', 'dist')));

// -------> API routes <-------
app.use('/api/user', routerAuth);
app.use('/api/goals', routerGoals); 


// Catch-all route to serve the index.html file for any other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

//root path generally to test 
// app.get('/', (req : Request, res : Response) => {
    //     res.send('Hello from Server.ts');
    // });
    
    // app.post('/', (req : Request, res : Response) => {
        //     const {username, email} = req.body;
        //     //pool.query('INSERT INTO users (username, email) VALUE ($1, $2) RETURNING *', [username, email])
        //     res.send(`${username} and ${email} saved in database`);
        // });
        
        
// -------> Error Handling <--------------
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