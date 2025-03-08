import express from "express"
const app = express()
import fs from "fs"
import { v4 as uuidv4 } from "uuid"
import cors from "cors"
const PORT = 3030

console.log(cors)

app.use(cors())

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/" , (request , response)=>{
    console.log(request.url)
    response.send("Hello user")    
})

app.post("/createUser" , (request , response)=>{
    console.log(request.url, "url")
    const fileExists = fs.existsSync("users.txt")
    console.log("fileExists" , fileExists)

    if(fileExists){
        //appending
        console.log("file Append")

        const getData = fs.readFileSync("users.txt" , "utf-8")
        const parseData = JSON.parse(getData)
        parseData.push({...request.body , id:uuidv4()})
        console.log("parseData" , parseData)
        fs.writeFileSync("users.txt" ,JSON.stringify(parseData))

    }else{
        // create file
        const tempArr =[]
        tempArr.push({...request.body , id:uuidv4()})
        fs.writeFileSync("users.txt", JSON.stringify(tempArr))
    }
    response.json({
        message : "USER CREATED!"
    })
})


app.get("/getAllUser", (req, res) => {
    const users = fs.readFileSync("users.txt", "utf-8")
    res.send(JSON.parse(users))
})

app.post("/deleteUser", (request , response)=>{
    console.log(request.url)
    response.send("User Deleted")
})




app.listen(PORT, ()=>console.log("server in running on "+ PORT))