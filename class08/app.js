import express from "express"
import mongoose from "mongoose"
import UserModel from "./models/shema.js"
const app = express()
const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




const URI = "mongodb://admin:admin123@cluster0-shard-00-00.tde8j.mongodb.net:27017,cluster0-shard-00-01.tde8j.mongodb.net:27017,cluster0-shard-00-02.tde8j.mongodb.net:27017/?ssl=true&replicaSet=atlas-t59ptn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI)
    .then(() => console.log("MONGODB CONNECTED!"))
    .catch((error) => console.log("MONGODB ERROR", error))

// DATA CREATE
app.post("/createuser", async (request, response) => {
    console.log("body", request.body)
    try {
        const userResponse = await UserModel.create(request.body)
        console.log("response", userResponse)
        response.json({
            message: "USER CREATED!",
            data: userResponse
        })
    } catch (error) {
        console.log("error", error.message)
        response.json({
            message: error.message || "something went wrong!",
            data: null
        })
    }


})


app.listen(PORT, () => console.log("Server is running on localhost:/" + PORT))