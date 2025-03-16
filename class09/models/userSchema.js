import mongoose from "mongoose";
const userSchems = new mongoose.Schema({
    firstName : {
        type: String
    }
})

const userModel = mongoose.model("user" , userSchems)

export default userModel