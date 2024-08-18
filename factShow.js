// Cats API

let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFact();
  let p = document.querySelector("#result");
  p.innerText = fact;
});

async function getFact() {
  try {
    let fact = await axios.get(url);
    return fact.data.fact;
  } catch (err) {
    console.log(err);
    return "No fact found!";
  }
}
