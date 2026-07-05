const express=require("express");
const app=express();
const mongoose = require('mongoose');
const Chat=require("./models/chats")
main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


const path=require("path");
const methodOverride=require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(8080,()=>{
    console.log("app is listening on port 8080")
})

app.get("/",(req,res)=>{
    res.send("root is working")
});

app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    res.render("index.ejs",{chats})
});

app.get("/chats/new",(req,res)=>{
    res.render("form.ejs")
})

app.post("/chats",async(req,res)=>{
    let {from,to,msg}=req.body
    const chat1=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    await chat1.save();
    res.redirect("/chats")
})

app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params

    let chat=await Chat.findById(id)
    res.render("edit.ejs",{chat})
});
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let{msg}=req.body;
    await Chat.findByIdAndUpdate(id,{msg:msg,updated_at:new Date()})
    res.redirect("/chats")
});
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats")
})