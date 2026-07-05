let url4="http://universities.hipolabs.com/search?country=India";
let state="";
let btn=document.querySelector("button");
let input=document.querySelector("input");
let p=document.querySelector("#result");
let form=document.querySelector("form")
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    state=input.value.toLowerCase();
    let result=await getUni();
    if(state){
        result=result.filter(f=>f["state-province"]&&f["state-province"].toLowerCase().includes(state))
    }
    showList(result);
})

async function getUni(){
    try{
        let res=await axios.get(url4);
        return res.data
    }catch(e){
        console.log(e);
        return []
    }
   
};

function showList(result){
    let list=document.querySelector("ul");
    list.innerHTML="";
    for(r of result){
            let li=document.createElement("li");
            li.innerText=r.name;
            list.appendChild(li);
    }
}










// let url="https://catfact.ninja/fact";
// let url2="https://dog.ceo/api/breeds/image/random";
// let url3="https://icanhazdadjoke.com/"


// async function getJokes(){
//     let config={headers:{Accept:"application/json"}}
//     let res= await axios.get(url3,config);
//     return res.data.joke
// }

// async function getFacts(){
//     try{
//     let res=await axios.get(url)
//     return res;
//     }catch(e){
//         console.log("ERROR -",e)
//         return "No Fact Found"
//     }
// }

// async function getImage(){
//     try{
//     let res= await axios.get(url2);
//     return res;
//     }catch(e){
//         console.log("error -",e);
//         return "/"
//     }
// }

// async function func(){
//      let result=await getFacts();
//     let p=document.querySelector("#result");
//     p.innerText=result.data.fact;
// }
// func();

// async function func3(){
//      let result=await getJokes();
//     let p1=document.querySelector("#result1");
//     p1.innerText=result
// }
// func3();

// async function func2(){
//     let result=await axios.get(url2);
//     let image=document.querySelector("#dog1");
//     image.setAttribute("src",result.data.message)
// };
// func2();

// let btn2=document.querySelector("#dog");
// btn2.addEventListener("click",async()=>{
//     let result=await getImage();
//     let image=document.querySelector("#dog1");
//     image.setAttribute("src",result.data.message);
// })

// let btn= document.querySelector("#cat");
// btn.addEventListener("click",async()=>{
//     let result=await getFacts();
//     let p=document.querySelector("#result");
//     p.innerText=result.data.fact;
// })

// let btn3= document.querySelector("#joke");
// btn3.addEventListener("click",async()=>{
//     let result=await getJokes();
//     let p=document.querySelector("#result1");
//     p.innerText=result;
// })
