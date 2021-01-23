const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


function dogLinkCreator() {
  let dogLinks = [];
  let keys = Object.keys(dogs);
  keys.forEach((dog) => {
    const a = document.createElement("a");
    a.innerHTML = `${dog}`;
    a.href = `${dogs[dog]}`;
    const li = document.createElement("li");
    li.classList.add("dog-link");
    li.appendChild(a);
    dogLinks.push(li); 
  })
  // let h3 = document.getElementsByTagName("h3") [0];
  // h3.addEventListener("mouseover", () => {})
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator();
  const ul = document.querySelector(".drop-down-dog-list")
  dogLinks.forEach( (li) => {
    ul.appendChild(li);
  })
}

let nav = document.getElementsByTagName("nav") [0];
// debugger
nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handlerLeave);


function handleEnter() {
  const ul = document.querySelector(".drop-down-dog-list");
  ul.classList.remove("drop-down-dog-list");
}

function handlerLeave() {
  const ul = document.querySelector(".drop-down-dog-nav ul");
  ul.classList.add("drop-down-dog-list")
}



attachDogLinks();