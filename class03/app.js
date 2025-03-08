import express from "express";
import prductDataArr from "./data.js";

const app = express()
const PORT = 3000

app.get("/", (request, response)=>{
    console.log(request.url)
    response.send("hello server from shoukat")
})


app.get("/about", (request, response)=>{
    console.log(request.url)
    response.send("Hello about from shoukat")
})


app.get("/profile", (request, response)=>{
    console.log(request.url)
    response.send("hello profile from shoukat")
})


app.get("/contact", (request, response)=>{
    console.log(request.url)
    response.send("hello Contact from shoukat")
})


//all products
app.get("/products", (request, response)=>{
    console.log(request.url)
    response.send(prductDataArr)
})


//single product

app.get("/product/:id", (request, response)=>{
    console.log(request.params.id)
    const productId = request.params.id
    const product = prductDataArr.find((item)=>{
        if(productId == item.id){
            return item
        }
    })
    
    if(product){
        response.send(product)
    }else{
        response.send("Not Found")
    }

})



//query params

app.get("/product", (request, response)=>{
    console.log(request.query.name)
    response.send("hello " + request.query.name)
})
app.listen(PORT, ()=>console.log(`server is running on https://localhost/${PORT}`))