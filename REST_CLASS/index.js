const express= require("express");
const app= express();
const { v4: uuidv4 } = require('uuid');
const methodOverride= require('method-override')
let PORT=8080;
const path =require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")))

let posts=[
    {user:"apnacollege",
    content:"i love coding",
    id: uuidv4()
    },
    {user:"theabdullah005",
    content:"na de dil pardesi nu",
    id:uuidv4()
    },
    {user:"thebhatti05",
    content:"Delta, last month",
    id:uuidv4()
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
});

app.get("/posts/new",(req,res)=>{
    res.render("form.ejs")
});
app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {user, content}=req.body;
    posts.push({user, content, id});
    res.redirect("/posts")
});
app.get("/posts/:id",(req, res)=>{
    let {id}= req.params;
    let post= posts.find((p)=>id ===p.id);
    res.render("detail.ejs", {post})
});
app.patch("/posts/:id",(req, res)=>{
    let {id}= req.params;
    let newContent=req.body.content;
    let post= posts.find((p)=>id === p.id);
    post.content=newContent
    res.send("patch is working")
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post= posts.find((p)=>id === p.id);
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts= posts.filter((p)=>id !== p.id);
    res.redirect("/posts")
})
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})