const express= require("express");
const app=express();
const cookieParser= require("cookie-parser");
app.use(cookieParser("secretCode"))

app.get("/",(req,res)=>{
    console.log(req.cookies)
    res.send("working")
});

app.get("/getSignedCookies",(req,res)=>{
    res.cookie("greet","namaste",{signed:true})
    res.send("sent");
})

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("check console")
})

app.get("/cookie",(req,res)=>{
    res.cookie("operation","dhurandhar")
    res.send("cookie")
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})