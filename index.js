// Write your code here!
let element = document.querySelector("main");
element.remove();

let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.id = "victory";
newHeader.innerText = "Calie is the champion";
