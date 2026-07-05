const express=require("express");
const app=express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
let Port=8080;

app.listen(Port,()=>{
    console.log("server is listening on 8080")
});
app.get("/register",(req,res)=>{
    let{user, password}= req.query;
    res.send(`Standard get request. Welcome ${user}`)
});
app.post("/register",(req,res)=>{
    let{user, password}= req.body;
    res.send(`Standard POST Request ${user}`)
})
