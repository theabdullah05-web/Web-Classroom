const express= require('express');
const path= require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride=require("method-override");
const app= express();
let PORT= 8080;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
let posts=[
    {
        username:"theabdullah005",
        image:"https://upload.wikimedia.org/wikipedia/en/e/ee/Avengers_Doomsday_poster.jpg",
        caption:"New trailer footage debuted today during the Disney panel at CinemaCon in Las Vegas, showing a major crossover between the original X-Men and the current MCU roster.",
        id:uuidv4()
    },
    {
        username:"hamza02",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGp4Z-5N_jeiUvIrzXJC_VBJnICjcxPePFZfdCyF-YFo989caoqa3edjH8oGY86sjJEIiXg&s=10",
        caption:"Dhurandhar[a] is a 2025 Indian Hindi-language spy action thriller film written and directed by Aditya Dhar. It is produced by Jyoti Deshpande, Aditya Dhar, and Lokesh Dhar, under Jio Studios and B62 Studios. The film features an ensemble cast consisting of Ranveer Singh, Akshaye Khanna, Sanjay Dutt, Arjun Rampal, R. Madhavan, Sara Arjun, Rakesh Bedi, Gaurav Gera, and Danish Pandor alongside several supporting actors.",
        id:uuidv4()
    },
    {
        username:"streetfighter",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjL5CK9RjPmDx6NYs8sbwki1Nhl9kG7zWUdg&s",
        caption:"Street Fighter is an upcoming American martial arts comedy film directed by Kitao Sakurai from a screenplay he wrote with T. J. Fixman, based on a story by Dalan Musson and Gary Dauberman.",
        id:uuidv4()
    }
]
app.get("/instapost",(req,res)=>{
    res.render("home.ejs",{posts})
});
app.get("/instapost/new",(req,res)=>{
    res.render("new.ejs")
});
app.post("/instapost",(req,res)=>{
    let id=uuidv4();
    let {username, image, caption}=req.body;
    posts.push({username, image, caption, id});
    res.redirect("http://localhost:8080/instapost")
});
app.get("/instapost/:id",(req,res)=>{
    let {id}=req.params
    let post=posts.find((p)=>id === p.id);
    res.render("post.ejs",{post})
});
app.get("/instapost/:id/edit",(req,res)=>{
    let {id}=req.params
    let post=posts.find((p)=>id === p.id);
    res.render("edit.ejs",{post})
})
app.patch("/instapost/:id",(req,res)=>{
    let newImage=req.body.image;
    let newCaption=req.body.caption;
    let {id}=req.params
    let post=posts.find((p)=>id === p.id);
    post.image=newImage;
    post.caption=newCaption;
    res.redirect("http://localhost:8080/instapost")
});
app.delete("/instapost/:id",(req,res)=>{
    let {id}= req.params;
    posts=posts.filter((p)=>id !== p.id)
    res.redirect("http://localhost:8080/instapost")
})
app.listen(PORT,()=>{
    console.log(`app is listening on ${PORT}`)
});