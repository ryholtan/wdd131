const newPara = document.createElement("p");
newPara.innerText = "Added with js!";
document.body.appendChild(newPara);

const Pic = document.createElement("img");
Pic.src = "https://picsum.photos/200";
Pic.alt = "Random image from picsum";
document.body.appendChild(Pic);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSect = document.createElement("section");
const newH2 = document.createElement("h2");
const newerPara = document.createElement("p");
newerPara.innerText = "This was added through js!"
newH2.innerText = "DOM Basics";
newSect.appendChild(newH2);
newSect.appendChild(newerPara);
document.body.appendChild(newSect)

