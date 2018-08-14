import express from "express"
import {connect} from './config/db'
import {restRouter} from "./api"
import passport from "passport"
import { configJWTStrategy} from './api/middlewares/passport-jwt';


const app = express()
connect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.send("it works")
})

app.use(passport.initialize())
configJWTStrategy();

app.use("/api", restRouter)

app.listen(5000, ()=>{
    console.log("server running on port 5000")
})