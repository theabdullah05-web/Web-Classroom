let input=document.querySelector("input");
let btn=document.querySelector("button");
let form= document.querySelector("form");
let ul=document.querySelector("ul");

form.addEventListener("submit",function list(e){
    e.preventDefault()

    let li2=document.createElement("li")
    ul.append(li2);

    let div=document.createElement("div")
    li2.append(div);

    let li=document.createElement("li")
    li.innerText=input.value;
    li.classList.add("li")
    div.append(li);

    let btn2=document.createElement("button");
    btn2.innerText="delete"
    div.append(btn2);
    btn2.addEventListener("click",function dlt(e){
        e.stopPropagation();
        li2.remove()
    })
    btn2.classList.add("btn");

    let btn3=document.createElement("button");
    btn3.innerText="UPPER CASE"
    div.append(btn3);
    btn3.addEventListener("click",function up(e){
        e.stopPropagation();
        li.innerText=li.innerText.toUpperCase()
    })
    btn3.classList.add("btn")

    let btn4=document.createElement("button");
    btn4.innerText="lower case"
    div.append(btn4);
    btn4.addEventListener("click",function low(e){
        e.stopPropagation();
        li.innerText=li.innerText.toLowerCase()
    })
    btn4.classList.add("btn");
    input.value=""
})