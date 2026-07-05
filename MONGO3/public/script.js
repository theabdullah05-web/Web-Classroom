let dltBtns=document.querySelectorAll(".delete");
for (btn of dltBtns){
    btn.addEventListener("click",function dltBtn(e){
        let choice=confirm("Your chat is being deleted");
        if(!choice){
            e.preventDefault();
        }
});
}