import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 2020;

const URI = "mongodb+srv://shoukatrai:shoukat123@cluster0.tde8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



mongoose.connect(URI)
.then(()=>{
    console.log("MongoDB connected")
})
.catch((error)=>{
    console.log("MongoDB not connected", error.message)
})

app.get("/", (req, res)=>{
    console.log(req.url)
    res.send("Hello server from")
})


app.listen(PORT, ()=>console.log("Server running"))