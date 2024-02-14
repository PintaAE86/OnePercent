import express, {Request, Response} from 'express';
import dotenv from 'dotenv'; 
const app = express();

dotenv.config();//to ready .env files 

const port = process.env.PORT || 3000;

// to read encoded data by standard format used by HTML
app.use(express.urlencoded({extended : true}));
//built in method to read parse body, dont need a body parser
app.use(express.json());

app.get('/', (req : Request, res : Response) => {
    res.send('Hello World');
});

app.post('/', (req : Request, res : Response) => {
    res.send('Hello World');
});

app.get('/', (req : Request, res : Response) => {
    res.send('Hello World');
});

app.get('/', (req : Request, res : Response) => {
    res.send('Hello World');
});
// Catch all error handler 
app.use((err : Error, req : Request, res: Response) => {
    console.log(`Error Occured: ${err}`);
    res.status(404).send('Does not exist.')
})

//Global Error Handling 

app.listen(port, () => console.log(`Server listening on ${port}`))