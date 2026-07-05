let head=document.querySelector("h3");
let clear=document.querySelector("#c")
let input=document.querySelector("input");
let btns=document.querySelectorAll(".btn");
let equal=document.querySelector(".enter");
let form=document.querySelector("form");

function toEval(str){
    return str.replace(/×/g,"*").replace(/÷/g, "/");
}

for(btn of btns){
    btn.addEventListener("click",function cl(){
        head.innerText=""
        input.value+=this.innerText
    })
}

form.addEventListener("submit",function fo(e){
    e.preventDefault();
    if(input.value){
    head.innerText=eval(toEval(input.value));
    input.value=""}
    })

input.addEventListener("input",function eq(){;
    head.innerText="";
    if(input.value){
    head.innerText=eval(toEval(input.value));
    }

});

clear.addEventListener("click",function cle(){
    input.value="";
    head.innerText=""
})
