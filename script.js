const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "I can edit this text here!";

container.appendChild(content);

const pOne = document.createElement("p");
pOne.classList.add("red");
pOne.textContent = "Hey I'm red!";


const hThree = document.createElement("h3");
hThree.classList.add("blue");
hThree.textContent = "I'm a blue h3!";

const pinkDiv = document.createElement("div");
pinkDiv.style.border = "solid black";
pinkDiv.style.backgroundColor = "pink";

const divHeader = document.createElement("h1");
divHeader.classList.add("divHeader");
divHeader.textContent = "I'm in a div";

const divText = document.createElement("p");
divText.classList.add("divText");
divText.textContent = "ME TOO!";

pinkDiv.append(divHeader, divText);

content.append(pOne, hThree, pinkDiv);

alertFunction = () => alert("YAY! YOU DID IT!");


const btn = document.querySelector("#btn");

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});