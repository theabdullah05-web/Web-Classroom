const express= require("express");
const app=express();
const session=require("express-session");
const path=require("path");
const flash=require("connect-flash");
const ejs=require("ejs")

app.use(session({
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true
}));
app.use(flash())

app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errMsg=req.flash("error");
    next()
})

app.set("view engine", ejs);
app.set("views",path.join(__dirname,"/views"))

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
    if(req.session.name==="anonymous"){
        req.flash("error","user not registered")
    }else{
        req.flash("success","user registered succesfully");
    }
    res.redirect("/hello")
})

app.get("/hello",(req,res)=>{
    res.render("flash.ejs",{name:req.session.name})
})

app.get("/",(req,res)=>{
    res.send("test successful")
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000")
})