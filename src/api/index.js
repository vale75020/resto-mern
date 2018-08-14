import express from 'express'
import {userRouter} from "./resources/user"
import {platsRouter} from "./resources/plats"
import { profilRouter } from './resources/profil';

export const restRouter = express.Router();

restRouter.use("/user", userRouter)
restRouter.use("/plats", platsRouter)
restRouter.use("/profil", profilRouter)