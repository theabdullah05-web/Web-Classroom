let paraOne=document.createElement("p");
paraOne.innerText="Hey I'm red!";
paraOne.style.color="red"
let body=document.querySelector("body");
body.prepend(paraOne);

let head=document.createElement("h3");
head.innerText="I am blue h3!"
head.style.color="blue";
body.prepend(head);

let div=document.createElement("div");
div.style.backgroundColor="pink";
div.style.border="1px solid black";
body.prepend(div);

let head1=document.createElement("h1");
head1.innerText="I'm in a div";
div.prepend(head1);

let paraTwo=document.createElement("p");
paraTwo.innerText="Me Too!";
div.prepend(paraTwo);