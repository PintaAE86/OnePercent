import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv'; 
const app = express();

dotenv.config();//to ready .env files 

const port = process.env.PORT || 3000;

// to read encoded data by standard format used by HTML
app.use(express.urlencoded({extended : true}));
//built in method to read parse body, dont need a body parser
app.use(express.json());

// types
//global error handler Object types
interface CustomeErr {
    log: string | number;
    status: number;
    message: string | number;
}


//Serve a static file to client before on initial render 
//app.use(express.static(path.join(__dirname, 'src/main.tsx')))

app.get('/', (req : Request, res : Response) => {
    res.send('Hello World');
});

app.post('/', (req : Request, res : Response) => {
    res.send('Hello World');
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

app.listen(port, () => console.log(`Server listening on ${port}`))