//Q1
let arr=[10,20,30]
let sq=arr.map((el)=>el**2)
let sum=sq.reduce((res,el)=>res+el)
let avg=sum/arr.length
console.log(avg)

//Q2
let arr1=[10,20,30,40];
let arr2=arr1.map((el)=>el+5)
console.log(arr2)

//Q3
let originalArray=[..."abdullah"]
let newArray=originalArray.map(el=>el.toUpperCase())
console.log(newArray)

//Q4
let doubleAndReturnArgs=(arr,...args)=>{
    let arr2=args.map(el=>el*2);
    return [...arr,...arr2]
}

//Q5
const mergeObjects=(obj1,obj2)=>{
    return {...obj1,...obj2}
}