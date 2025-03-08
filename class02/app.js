import http from "http"
// console.log(http)

const server = http.createServer((request, response)=>{
    console.log(request.url)
    if(request.url === "/"){
        response.end("Hello Route")
    }else if(request.url === "/about"){
        response.end("Hello about")
    }else if(request.url === "/profile"){
        response.end("Hello profile")
    }
})

const PORT = 3030
server.listen(PORT, ()=>{
    console.log("Server running on 3030 port number")
})

