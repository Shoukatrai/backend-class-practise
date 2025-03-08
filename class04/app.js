import express from "express"

const app = express()
const PORT = 3030

let userArr = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//createuser
app.post("/createuser", (request , response)=>{
    response.send("USER CREATED SUCCESSFULLY! " + request.body.name)
    console.log(request.body)
})



//getuser
app.get("/getuser", (request , response)=>{
    response.send("USER GOT SUCCESSFULLY!")
})


//updateuser
app.post("/updateuser" , (request , response)=>{
    response.send("USER UPDATED SUCCESSFULLY!")
    console.log(request.url)
})

//deleteuser
app.post("/deleteuser" , (request , response)=>{
    response.send("USER DELETED SUCCESSFULLY!")
})


app.listen(PORT, ()=>console.log("server is running on http://localhost/3030"))