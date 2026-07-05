//Q1
//mouseout
let mouse=document.querySelector(".mouse");
mouse.addEventListener("mouseout",function mouse(){
    console.log("mouse left")
})

//keypress
let body=document.querySelector("body");
body.addEventListener("keypress",function key(){
    console.log("key was pressed")
})

//scroll
window.addEventListener("scroll",function scroll(){
    console.log("page is being scrolled")
})

//load
window.addEventListener("load",function onload(){
    console.log("everything is loaded")
})

//Q2
let btn=document.createElement("button");
body.prepend(btn)
btn.innerText="click me";
btn.addEventListener("click",()=>{
    btn.classList.toggle("green")
})

//Q3
let head=document.querySelector("h1");
let input=document.querySelector("input");
let form=document.querySelector("form");
input.addEventListener("input",function heading(e){
    let inputValue=input.value;
    let arr=[...inputValue];
    let filteredarr = arr.filter((el)=>(el>="a" &&el<="z") || (el>="A" &&el<="Z") || el==" ")
    let str=filteredarr.join("")
    head.innerText=str

})