const express = require("express");

const app=express();

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to World best Mern Series by Sujit ");

})

const PORT =5000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})