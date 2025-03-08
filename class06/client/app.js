

console.log(fullName)
console.log(email)
console.log(password)

fetch("http://localhost:3030/getAllUser")
    .then(response => response.json()) //convert to json
    .then((users) => {
        console.log("users", users)
    })
    .catch((error) => {
        console.log(error)
    })

const creatUser = () => {
    console.log("creatUser")
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if(fullName == "" || email == "" , password == ""){
        alert("Fill All the blanks")
        return
    }

    const userObj = {
        fullName,
        email,
        password
    }

    fetch("http://localhost:3030/createUser",{
        method: "POST",
        headers:{
            "Content-type" : "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(res=>res.json()) //res to json
    .then((users)=>{
        console.log("users" , users)
        alert(users.message)
    })
    .catch((error)=>{
        console.log("error" , error)
    })
}


const deleteUser = ()=>{
    console.log("deleteUser")
    fetch("http://localhost:3030/deleteUser",{
        method:"POST"
    })
    
}
