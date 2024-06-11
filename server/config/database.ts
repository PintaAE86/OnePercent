//Pool is used when you want to connect to your database using environment variables 

import pg from 'pg';
const { Pool } = pg;
// import { server } from 'typescript';


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