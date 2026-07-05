let head=document.querySelector("h3");
let input=document.querySelector("textarea");
let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",function cl(){
        console.log(this.value)
    })
}