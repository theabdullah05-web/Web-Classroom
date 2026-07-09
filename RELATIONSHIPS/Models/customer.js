const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

let orderSchema= new mongoose.Schema({
    name:String,
    price:Number
});

let customerSchema= new mongoose.Schema({
    name:String,
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }]
})

let Order= mongoose.model("Order",orderSchema);
let Customer=mongoose.model("Customer",customerSchema)
let addCustomer= async()=>{
   let customer1=await Customer.findOne().populate("orders");
   console.log(customer1)
};

addCustomer();