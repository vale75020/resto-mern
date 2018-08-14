import express from 'express'
import platsController from './plats.ctrl' 

export const platsRouter = express.Router()

platsRouter.post("/add", platsController.create)
platsRouter.get("/", platsController.findAll)
platsRouter.get("/:id", platsController.findOne)
platsRouter.put("/:id", platsController.update)
platsRouter.delete("/:id", platsController.delete)

