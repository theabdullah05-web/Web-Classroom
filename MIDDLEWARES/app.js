const express=require("express");
const ExpressError = require("./ExpressError");
const app=express();

//Logger
app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time)
    next();
});

app.use("/random",(req,res,next)=>{
    console.log("I am for random only");
    next();
});

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    console.log(token)
    if(token =="giveAccess"){
        next()
    }else{
        throw new ExpressError(401,"ACCESS DENIED!!!")
    }
}

app.get("/wrong",(req,res)=>{
    throw new ExpressError(400,"abcd is not defined!")
})

app.get("/api",checkToken,(req,res)=>{
    res.send("data")
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ACCESS DENIED")
})

app.get("/",async(req,res)=>{
    res.send("Hi, I am root")
});

app.get("/random",(req,res)=>{
    res.send("this is a random page")
})

app.use((req,res,next)=>{
    throw new ExpressError(404,"Page not Found")
});

app.use((err,req,res,next)=>{
    console.log(err.name);

    if(err.name==="ValidationError"){
        err.status=400
    }

    if(err.name==="CastError"){
        err.status=400;
        err.message="InvalidID"
    }

    let{status=500,message="Some Error Occured"}=err;
    res.status(status).send(message)
})

app.listen("8080",()=>{
    console.log("app is listening on port 8080")
})