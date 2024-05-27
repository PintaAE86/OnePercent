import express, { Response, Request, NextFunction} from "express";
import { Router } from "express";
import authController from "../controllers/authController";

const routerAuth = Router();

routerAuth.post('/signup', authController.signup );
routerAuth.post('/me', authController.aboutMe);
routerAuth.get('/login', authController.login);
routerAuth.post('/logout', authController.logout);

export default routerAuth;
