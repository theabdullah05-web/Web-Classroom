const express= require("express");
const app=express();
const session=require("express-session");
app.use(session({
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true
}))

app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++
    }else{
        req.session.count=1
    }
    res.send(`you sent request ${req.session.count} times`)
})

app.get("/call",(req,res)=>{
    let{name="anonymous"}=req.query;
    req.session.name=name;
    res.redirect("/hello")
})

app.get("/hello",(req,res)=>{
    res.send(`Hello ${req.session.name}`)
})

app.get("/",(req,res)=>{
    res.send("test successful")
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})