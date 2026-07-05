const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express= require('express');
const app= express();
const path=require("path");
const methodOverride=require("method-override");
const { v4: uuidv4 } = require('uuid');
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let port=8080;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "4256ab4256"
});
let getRandomUser= ()=>{
  return[
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.listen(port, ()=>{
  console.log(`app is listening on ${port}`)
});
let q="SELECT count(*) FROM user"

app.get("/",(req,res)=>{
  try{
  connection.query(q, (err,result)=>{
  if(err) throw(err);
  let counts= result[0]["count(*)"];
  res.render("home.ejs",{counts})
});
}catch(err){
  console.log(err);
  res.send("some error occured")
}
});

app.get("/user",(req,res)=>{
  let q="SELECT * FROM user";
  try{
    connection.query(q,(err,result)=>{
      if(err)throw(err);
      let users=result;
      res.render("table.ejs",{users})
  })}catch(err){
    console.log(err)
  }
  
});

app.get("/user/:id/edit",(req,res)=>{
    let {id}= req.params;
    let q=`SELECT * FROM user WHERE id="${id}"`
    try{
      connection.query(q,(err,result)=>{
        if(err)throw(err);
        let userr=result[0];
        res.render("edit.ejs",{userr})
      })
    }catch(err){
        console.log(err)
      }
});

app.patch("/user/:id",(req,res)=>{
    let {id}= req.params;
    let {password:newPass, username:newUser}= req.body;
    let q= `SELECT * FROM user WHERE id="${id}"`
    try{connection.query(q,(err,result)=>{
      if(err)throw(err);
      let user1=result[0];
      if(newPass != user1.password){
        res.send("Incorrect Password")
      }else{
        let q2=`UPDATE user SET username="${newUser}" WHERE id="${id}"`;
        try{connection.query(q2,(err, result)=>{
          if(err)throw(err);
          console.log(result);
          res.redirect("/user");
        })}catch(err){
          console.log("err")
        }
      }
    })}catch(err){
      console.log(err);
      res.send("some error in DB")
    }
});
app.get("/user/:id/delete",(req,res)=>{
  let{id}=req.params
  let q=`SELECT * FROM user WHERE id="${id}"`;
  try{
    connection.query(q,(err,result)=>{
      if(err)throw(err);
      let user2=result[0];
      res.render("delete.ejs",{user2});
    })
  }catch(err){
    console.log(err);
    res.send(`some error occured in DB`)
  }
  
});

app.delete("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {email:newEmail, password:newPassw}=req.body;
  let q=`SELECT * FROM user WHERE id="${id}"`
  try{
    connection.query(q,(err,result)=>{
      if(err)throw(err);
      let user3=result[0];
      if(newEmail != user3.email && newPassw != user3.password){
        res.send("You have entered wrong email or password")
      }else{
        let q2=`DELETE FROM user WHERE id="${user3.id}"`
        connection.query(q2,(err,result)=>{
          try{
            if(err)throw(err);
            console.log(result);
            res.redirect("/user");
          }catch(err){
            console.log(err);
            res.send("Some error occured in DB")
          }
        })
      }
    })
  }catch(err){
      console.log(err);
      res.send("some error occured in DB")}
  }
);

app.get("/user/new",(req,res)=>{
    res.render("form.ejs")
});

app.post("/user",(req,res)=>{
  let {username:newName,password:newPaas,email:newMail}=req.body;
  let q=`INSERT INTO user (id,username,email,password) VALUES ("${uuidv4()}","${newName}","${newMail}","${newPaas}")`;
  try{
      connection.query(q,(err,result)=>{
        if(err)throw(err);
        console.log(result);
        res.redirect("/user")
      })
  }catch(err){
    console.log(err);
    res.send("Some error occured in DB")
  }
})

