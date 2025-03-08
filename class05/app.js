import fs, { read } from "fs"
import express from "express"
import { v4 as uuidv4 } from "uuid"
import { isUtf8 } from "buffer"


const app = express()
const PORT = 2020

//BODY PARSER
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//FIRST REQUST /
app.get("/", (request, response)=>{
    response.send("Hello Server")
})


//request createUser
app.post("/createUser" , (request, response)=>{
    const fileExist = fs.existsSync("users.txt")
    
    if(fileExist){
        console.log("file append")
        const getData = fs.readFileSync("users.txt" , "utf-8")
        const parseData = JSON.parse(getData)
        parseData.push({...request.body , id:uuidv4()})
        console.log("parseData" , parseData)
        fs.writeFileSync("users.txt" , JSON.stringify(parseData))
    }else{
        //creating file
        const tempArr =[]
        tempArr.push({...request.body, id:uuidv4()})
        console.log(tempArr)
        fs.writeFileSync("users.txt", JSON.stringify(tempArr))
    }
    response.send("User Created")
})


//get all users
app.get("/getAllUsers", (request, response)=>{
    const users =  fs.readFileSync("users.txt" , "utf-8")
    response.send(JSON.parse(users))
})


//updating user INFO
app.post("/updateUser/:id" , (request , response)=>{
    const params = request.params
    console.log(params.id ,"id")

    const getData = fs.readFileSync("users.txt" , "utf-8")
    const parseData = JSON.parse(getData)

    const newArr = parseData.map((user)=>{
        // console.log("user" , user)
        
        if(user.id === params.id){
            return request.body
        }else{
            return user
        }
    })
    console.log("newArr" , newArr)
    fs.writeFileSync("users.txt" , JSON.stringify(newArr))
    response.send("UPDATE USER")

})

app.listen(PORT, ()=>{
    console.log("sever is running on "+ PORT)
})