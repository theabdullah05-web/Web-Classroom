const mongoose=require("mongoose");

main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

let bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        maxLength:20,
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min:[0,"Price is too low for amazon selling"],
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String]
});

let Book=mongoose.model("Book",bookSchema);

let book1=new Book({
    name:"Marvel Comics",
    author:"Stan Lee",
    price:500,
    discount:25,
    category:"fiction",
    genre:["superhero","comics"]
})
book1.save().then((data)=>{
    console.log(data)
}).catch(err=>{
    console.log(err.errors.name.properties.message)
})