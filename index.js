const express = require('express');
const path = require("path");
const server = express();



// middleware 

server.use(express.static(path.join(__dirname, "public")))
// const handleHomePage = (req, res)=>{
//     // find file
//     const homepageFilePath = path.join(__dirname, "public" , "index.html")
//     // send file as response
//     res.sendFile(homepageFilePath)
// }

// const handleAboutPage = (req, res)=>{
//     // find file
//     const aboutpageFilePath = path.join(__dirname, "public" , "index.html")
//     // send file as response
//     res.sendFile(aboutpageFilePath)
// }
// const handleContactPage = (req, res)=>{
//     // find file
//     const contactpageFilePath = path.join(__dirname, "public" , "index.html")
//     // send file as response
//     res.sendFile(contactpageFilePath)
// }
// const handleServicePage = (req, res)=>{
//     // find file
//     const servicepageFilePath = path.join(__dirname, "public" , "index.html")
//     // send file as response
//     res.sendFile(servicepageFilePath)
// }




// routes
// server.get("/", handleHomePage)
// server.get("/about", handleAboutPage)
// server.get("/contact", handleHomePage)
// server.get("/service", handleHomePage)

server.listen (4000,()=>console.log("server is working"))