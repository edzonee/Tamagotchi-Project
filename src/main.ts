import { Tamagotchi } from "./tamagotchi";

const myTam = new Tamagotchi(prompt(`Pick a name`));

console.log(myTam);

document.body.style.textAlign = "center";

const myTitle = document.createElement("h1");
myTitle.setAttribute("id", "tamInfo");
document.body.appendChild(myTitle);
myTitle.innerText = "Your Tamagotchi's info";

const animalName = document.createElement("h3");
animalName.setAttribute("id", "tamName");
document.body.appendChild(animalName);
animalName.innerText = "Name of your Tamagotchi: " + myTam.animalName;

const animalType = document.createElement("h3");
animalType.setAttribute("id", "tamType");
document.body.appendChild(animalType);
animalType.innerText = "Type of animal: " + myTam.animalType;

const feedBtn = document.createElement("button");
feedBtn.setAttribute("id", "feedBtn");
feedBtn.addEventListener("click", () => myTam.feed());
document.body.appendChild(feedBtn);
feedBtn.innerText = "Feed";

const playBtn = document.createElement("button");
playBtn.setAttribute("id", "playBtn");
playBtn.addEventListener("click", () => myTam.play());
document.body.appendChild(playBtn);
playBtn.innerText = "Play";

const restart = document.createElement("button");
restart.setAttribute("id", "restartBtn");
restart.addEventListener("click", () => location.reload());
document.body.appendChild(restart);
restart.innerText = "Start new game";

const hunger = document.createElement("p");
hunger.setAttribute("id", "hungerText");
document.body.appendChild(hunger);

const happiness = document.createElement("p");
happiness.setAttribute("id", "happinessText");
document.body.appendChild(happiness);

const animalPicture = document.createElement("img");
animalPicture.setAttribute("id", "animalPicture");
animalPicture.setAttribute("src", myTam.getAnimalImg());
animalPicture.style.height = "100px";
document.body.appendChild(animalPicture);
