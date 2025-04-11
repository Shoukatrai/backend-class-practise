import mongoose from "mongoose";
const userSchems = new mongoose.Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    email: {
        type: String
    },
    password : {
        type: String
    },
    age : {
        type: Number
    }
})

const userModel = mongoose.model("user" , userSchems)

export default userModel