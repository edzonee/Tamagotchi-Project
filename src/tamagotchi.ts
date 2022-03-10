export class Tamagotchi {
  /* happinessValue has value 6 and hungerValue has 4 because I have no HTML elements, since I created all in TS */
  private happinessValue: number = 6;
  private hungerValue: number = 4;
  public readonly animalType: string;
  private firstTimer: number;
  private secondTimer: number;

  constructor(public animalName: string) {
    this.animalType = this.getRandomType();
    this.firstTimer = setInterval(this.getHungerValue.bind(this), 1000); // change interval here
    this.secondTimer = setInterval(this.getHappinessValue.bind(this), 1000); // Change interval here
  }
  public getRandomType(): string {
    const random = Math.round(Math.random() * 2);
    const tamagotchiNames = ["Maskutchi", "Ginjirotchi", "Darumatchi"];
    let tamagotchiName = tamagotchiNames[random];
    return tamagotchiName;
  }
  public getAnimalImg(): string {
    return `./img/${this.animalType}.png`;
  }
  public play(): number {
    this.happinessValue++;
    return this.happinessValue;
  }
  public feed(): number {
    this.hungerValue--;
    return this.hungerValue;
  }
  private getHappinessValue(): void {
    this.happinessValue--;
    document.getElementById(
      "happinessText"
    ).innerText = `Happiness level: ${this.happinessValue}`;
    if (this.happinessValue >= 10) {
      document.getElementById(
        "happinessText"
      ).innerText = `Happiness level: I am already entertained.`;
    } else {
      document.getElementById(
        "happinessText"
      ).innerText = `Happiness level: ${this.happinessValue}`;
    }
    if (this.happinessValue == 0) {
      document.getElementById(
        "happinessText"
      ).innerText = `${this.animalName} died of depression...`;
      clearInterval(this.firstTimer);
      clearInterval(this.secondTimer);
      this.hideElements();
    }
    if (this.happinessValue == 1) {
      document.getElementById("happinessText").style.color = "red";
    } else {
      document.getElementById("happinessText").style.color = "black";
    }
  }
  private getHungerValue(): void {
    this.hungerValue++;
    document.getElementById(
      "hungerText"
    ).innerText = `Hunger level: ${this.hungerValue}`;
    if (this.hungerValue <= 0) {
      document.getElementById("hungerText").innerText = `Hunger level: Full.`;
    } else {
      document.getElementById(
        "hungerText"
      ).innerText = `Hunger level: ${this.hungerValue}`;
    }
    if (this.hungerValue == 10) {
      document.getElementById(
        "hungerText"
      ).innerText = `${this.animalName} died of hunger...`;
      clearInterval(this.firstTimer);
      clearInterval(this.secondTimer);
      this.hideElements();
    }
    if (this.hungerValue == 9) {
      document.getElementById("hungerText").style.color = "red";
    }
    else {
      document.getElementById("hungerText").style.color = "black";
    }
  }
  private hideElements(): void {
    document.getElementById("tamInfo").style.display = "none";
    document.getElementById("tamType").style.display = "none";
    document.getElementById("tamName").style.display = "none";
    document.getElementById("feedBtn").style.display = "none";
    document.getElementById("playBtn").style.display = "none";
    if (this.hungerValue == 10) {
      document.getElementById("happinessText").style.display = "none";
      document
        .getElementById("animalPicture")
        .setAttribute("src", "./img/Death.png");
    } else if (this.happinessValue == 0) {
      document.getElementById("hungerText").style.display = "none";
      document
        .getElementById("animalPicture")
        .setAttribute("src", "./img/Death.png");
    }
  }
  public createImgElement(): void {
    const makeTamaImg: HTMLImageElement =
      document.querySelector("#animalPicture");
    makeTamaImg.src = this.getAnimalImg();
  }
}
