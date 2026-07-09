const mongoose = require('mongoose');
const { Schema } = mongoose;
main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

const userSchema=new Schema({
    username:String,
    email:String
})

const postSchema=new Schema({
    content:String,
    likes:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const User=new mongoose.model("User",userSchema);
const Post= new mongoose.model("Post",postSchema);

let addUser=async()=>{
    let user1=await Post.find().populate("author")
console.log(user1)
};
addUser();