const express= require("express");
const app=express();
const path=require("path");
let port=8080;

app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
});

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/", (req, res)=>{
    res.render("home.ejs")
});
app.get("/rollDice", (req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal})
})
app.get("/ig/:username",(req,res)=>{
    const {username}=req.params
    const instaData=require("./data.json");
    let data= instaData[username];
    if(data){
        res.render("ig.ejs",{data})
    }else{
        res.render("error.ejs")
    }
   
})