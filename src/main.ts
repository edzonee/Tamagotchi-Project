import { Tamagotchi, AnimalTypes } from "./tamagotchi";

const myTam = new Tamagotchi(prompt(`Pick a name`));

console.log(myTam);
myTam.isAlive();
myTam.feed();

const myTitle = document.createElement("h1");
document.body.appendChild(myTitle);
myTitle.innerText = "Your Tamagotchi's info";

const animalName = document.createElement("h3");
document.body.appendChild(animalName);
animalName.innerText = "Name of your Tamagotchi: " + myTam.animalName;

const animalType = document.createElement("h3");
document.body.appendChild(animalType);
animalType.innerText = "Type of animal: " + myTam.animalType;

const feedBtn = document.createElement("button");
feedBtn.addEventListener("click", () => myTam.feed());
document.body.appendChild(feedBtn);
feedBtn.innerText = "Feed";

const playBtn = document.createElement("button");
playBtn.addEventListener("click", () => myTam.play());
document.body.appendChild(playBtn);
playBtn.innerText = "Play";

const resetBtn = document.createElement("button");
resetBtn.addEventListener("click", () => myTam.reset());
document.body.appendChild(resetBtn);
resetBtn.innerText = "Reset";

const restart = document.createElement("button");
restart.addEventListener("click", () => location.reload());
document.body.appendChild(restart);
restart.innerText = "Reload page";

const hunger = document.createElement("p");
hunger.setAttribute("id", "hungerText");
document.body.appendChild(hunger);
hunger.innerText = "Hunger level: " + myTam.feed();

const happiness = document.createElement("p");
happiness.setAttribute("id", "happinessText");
document.body.appendChild(happiness);
happiness.innerText = "Happiness level: " + myTam.play();
