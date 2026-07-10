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

customerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res= await Order.deleteMany({_id:{$in:customer.orders}})
        console.log(res)
    }
})

let Order= mongoose.model("Order",orderSchema);
let Customer=mongoose.model("Customer",customerSchema);

let addCustomer= async()=>{
    let dalchawal= await Order.findById("6a4f98db1089af11209e9d7a");
      let customer1= new Customer({
        name:"Karan Arjun",
        orders:dalchawal
      })
      await customer1.save();
    }

let deleteCustomer=async()=>{
    await Customer.findByIdAndDelete("6a4f9db4273926d2194d2e83");
}
deleteCustomer()
// addCustomer();