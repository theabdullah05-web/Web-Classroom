const express= require("express");
const app=express();

let port=8080;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});
app.get("/",(req,res)=>{
    res.send(`I am groot`)
});
app.get("/:username/:id",(req,res)=>{
    let {username, id}=req.params;
    let htmlStr=`<h1>this page is for @${username} whose id ${id}</h1>`
    res.send(htmlStr)
});
app.get("/search",(req,res)=>{
    let {q, color}=req.query;
    res.send(`<h1>Search results for ${q} whose color is ${color}</h1>`)
})




// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path")
// });
// app.get("/mango",(req,res)=>{
//     res.send("You contacted mango path")
// });
// app.get("/*splat",(req,res)=>{
//     res.send("This path doesnot exist")
// });
// app.post("/",(req,res)=>{
//     res.send("You sent a post request")
// })
// app.use((req,res)=>{
//     console.log("new incoming request");
//     let code="<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>"
//     res.send(code)
// });