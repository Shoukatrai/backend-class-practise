// let num1 = 100
// let num2 = 50

// console.log(num1 + num2)


// const {add , sub} = require("./utlils.js")

// import {add , sub} from "./utlils.js"
// add(100 , 200)
// sub(100 , 200)

import { deepStrictEqual } from "assert"
import fs from "fs"
// console.log(fs)

// creating a file using fs
// fs.writeFileSync("text.txt" , "Hello Fs")

//reading file
// const dataFile =  fs.readFileSync("./text.txt" , "utf-8")
// console.log(dataFile)


// appending
// fs.appendFileSync("./text.txt" , "\nHello File System")

//deleting
// fs.unlinkSync("./text.txt")


//creating folder
// fs.mkdirSync("hello")
fs.mkdirSync("hello/a", {recursive : true})
