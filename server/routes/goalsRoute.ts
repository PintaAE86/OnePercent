import { Router } from "express";
import goalsController from "../controllers/goalsController";

const routerGoals = Router();

routerGoals.get('/getGoal', goalsController.getGoal);
routerGoals.post('/addGoal', goalsController.addGoal);
routerGoals.post('/upDate', goalsController.updataGoal);
routerGoals.delete('/deleteGoal', goalsController.deleteGoal);
routerGoals.put('/incrementGoal', goalsController.incrementGoal);
routerGoals.put('/decrementGoal', goalsController.decrementGoal);

export default routerGoals;