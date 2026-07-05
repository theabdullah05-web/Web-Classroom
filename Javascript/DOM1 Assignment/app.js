//Q1
let input=document.createElement("input");
let btn=document.createElement("button");
btn.innerText="Click Me"
let body=document.querySelector("body");
body.append(input);
body.append(btn)

//Q2
input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

//Q3
let btn2=document.querySelector("#btn");
btn2.setAttribute("class","btn");

//Q4
let hI=document.createElement("h1");
hI.innerText="DOM Practice";
hI.classList.add("hI");
body.append(hI);

//Q5
let paraThree=document.createElement("p");
paraThree.innerHTML="Apna College <b>Delta</b> Practice";
body.append(paraThree);