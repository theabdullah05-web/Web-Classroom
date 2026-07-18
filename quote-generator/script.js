let URL = "https://dummyjson.com/quotes/random";
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn2 = document.querySelector(".btn");
let btn = document.querySelector(".btn2");
let box = document.querySelector(".box");
let quotes = [];

function updateArr(say, line) {
  quotes.push({
    author: say,
    quote: line,
  });
}

let init = async () => {
  try {
    let res = await fetch(URL);
    let jsonRes = await res.json();
    quote.innerText = jsonRes.quote;
    author.innerText = jsonRes.author;
    updateArr(jsonRes.author, jsonRes.quote);
    for (obj of quotes) {
      console.log(obj);
    }
  } catch (e) {
    console.log(e);
  }
};

init();

btn.addEventListener("click", init);

document.addEventListener("keypress", async function onSubmit(e) {
  if (e.key === "Enter") {
    init();
  }
});

btn2.addEventListener("click", function darkMode() {
  box.classList.toggle("dark");
});
