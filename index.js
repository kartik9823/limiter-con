const express=require("express");
const rateLimiter = require("./src/middleware/ratelimiter");

const app=express();

app.use(express.json());

app.use(rateLimiter);

app.get("/", (req,res)=>{
    res.send("welcome to the rate limiter example");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});