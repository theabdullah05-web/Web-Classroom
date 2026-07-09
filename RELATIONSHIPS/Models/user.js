const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

let userSchema= new mongoose.Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String
        }
    ]
});

let User= mongoose.model("User",userSchema);
let addUser= async()=>{
    let user1=new User({
        username:"Sherlock Holmes",
        addresses:[
            {
                location:"221B Baker Street",
                city:"London"
            },
            {
                location:"P36 DownTown",
                city:"London"
            }
        ]
    });
    await user1.save();
};

addUser();