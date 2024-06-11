import { Request, Response } from "express";

export default{

    getGoal : (req : Request, res : Response, ) : void => {
        console.log(req)
        res.send('Not Implement: testing getGoal')
    },
    addGoal : (req : Request, res : Response ) : void => {
        console.log(req)
        res.send('Not Implement: testing addGoal')
    },
    updataGoal : (req : Request, res : Response) : void => {
        console.log(req)
        res.send('Not Implement: testing updateGoal')
    },
    deleteGoal : (req : Request, res : Response) : void => {
        console.log(req)
        res.send('Not Implement: testing deleteGoal')
    },
    incrementGoal : (req: Request, res: Response) : void => {
        console.log(req)
        res.send('Not Implement: testing incrementGoal')
    },
    decrementGoal : ( req: Request, res: Response) : void => {
        console.log(req)
        res.send('Not Implement: testing decrementGoal')
    }
}
