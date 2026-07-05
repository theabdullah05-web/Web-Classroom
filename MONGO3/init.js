const mongoose = require('mongoose');
const Chat=require("./models/chats")
main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

Chat.insertMany([
  {
    from: "rahul",
    to: "amit",
    msg: "Hey Amit, are we still meeting today?",
    created_at: new Date()
  },
  {
    from: "shradha",
    to: "aman",
    msg: "Yes! I'll be there in 10 minutes.",
    created_at: new Date()
  },
  {
    from: "sneha",
    to: "rohan",
    msg: "Don't forget to bring the documents.",
    created_at: new Date()
  },
  {
    from: "karan",
    to: "anjali",
    msg: "Happy Birthday! Have a wonderful day!",
    created_at: new Date()
  },
  {
    from: "meera",
    to: "akash",
    msg: "Can you send me the project files?",
    created_at: new Date()
  }
]);