import express from "express"
import mongoose from "mongoose"
import userModel from "./models/userSchema.js"
const app = express()
const PORT = 2020

const URI = `mongodb+srv://admin:admin123@class08.7oayb.mongodb.net/?retryWrites=true&w=majority&appName=class08`


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(URI )
.then(()=>{
    console.log("MonogDb connected")
})
.catch((err)=>{
    console.log("monogDb connection error" , err)
})





app.get("/", (req , res)=>{
    console.log(req.url)
    res.send("Req Accepted")
})


app.post("/createUser" , async(req, res)=>{
    console.log(req.url)
    console.log(req.body)
    
    const response = await userModel.create(req.body)
    
    console.log("response" , response)
    res.json({
        message: "Response"
    })
})



app.listen(PORT , ()=>console.log("Server is running on " + PORT))