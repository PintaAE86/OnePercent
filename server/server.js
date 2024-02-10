import express from 'express';
import dotenv from 'dotenv'; 
const app = express();

dotenv.config();//to ready .env files 

const port = process.env.PORT || 3000;

// to read encoded data by standard format used by HTML
app.use(express.urlencoded({extended : true}));
//built in method to read parse body 
app.use(express.json());


app.listen(port, () => console.log(`Server listening on ${port}`))