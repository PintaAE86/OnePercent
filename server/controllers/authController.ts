import {Response, Request } from "express";

export default  {
    signup : (req : Request, res : Response) : void => {
        //
        const { name, email, userName, pswd, } = req.body
        res.send(` Not implement: post signup controller,${name}, ${email}, ${userName}. ${pswd}`);
    },
    login : (req : Request, res : Response) : void => {
        console.log(req)
        res.send('Not implement: post login controller');
    },
    logout : (req : Request, res : Response) : void => {
        console.log(req)
        res.send('Not implement: post logout controller');
    },

    aboutMe : (req : Request, res : Response) : void => {
        console.log(req)
        res.send('Not implement: post aboutMe controller');
    }
}