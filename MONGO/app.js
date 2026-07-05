const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
})

const User=mongoose.model("User",userSchema);

User.findOneAndDelete({_id:"6a38f5b78ec553f4f1b3280e"}).then(res=>{
    console.log(res)
})

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Bruce",email:"bruce@gmail.com",age:47},
//     {name:"Peter",email:"peter@gmail.com",age:30}
// ]).then((data)=>{
//     console.log(data)
// })

// const user2=new User({
//     name:"eve",
//     email:"eve@yahoo.com",
//     age:48
// })

// user2.save()