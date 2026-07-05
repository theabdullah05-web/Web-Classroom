const express=require("express");
const app=express();

// //Logger
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time)
//     next();
// });

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
        throw new Error("ACCESS DENIED!!!")
    }
}

app.get("/wrong",(req,res)=>{
    abcd=abcd;
})

app.get("/api",checkToken,(req,res)=>{
    res.send("data")
})

app.get("/",async(req,res)=>{
    res.send("Hi, I am root")
});

app.get("/random",(req,res)=>{
    res.send("this is a random page")
})

app.use((req,res)=>{
    res.status(404).send("Page not found")
});

app.listen("8080",()=>{
    console.log("app is listening on port 8080")
})