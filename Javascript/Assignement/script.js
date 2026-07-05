let arr=[7,9,0,-2];
console.log(arr.slice(0,3));
console.log(arr.slice(1,4));

let str="";
if(str.length==0){
    console.log("blank")
}else{
    console.log("not blank")
}

let string="Abdullah";
let idx=0;
let checkIdx=string.toLowerCase();
if(string[idx]===checkIdx[idx]){
    console.log("Yes")
}else{
    console.log("No")
}

let str1="   abcd  "
let str2=str1.trim();
console.log(str2)

let arr1=["banana","strawberry","cantaloupe"];
elm="banana"
if(arr1.includes(elm)){
    console.log("Yes")
}else{
    console.log("No")
}