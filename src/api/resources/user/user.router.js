import express from 'express'
import userController from './user.ctrl' 

export const userRouter = express.Router()

userRouter.post("/register", userController.register)
userRouter.post("/login", userController.login)


