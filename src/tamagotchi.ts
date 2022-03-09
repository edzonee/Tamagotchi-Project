type AnimalTypes = "Maskutchi" | "Ginjirotchi" | "Darumatchi";

class Tamagotchi {
  #isAlive: Boolean;
  #happinessValue: number = 5;
  #hungerValue: number = 5;
  animalType: AnimalTypes;
  #firstTimer: number;
  #secondTimer: number;

  constructor(public animalName: string) {
    this.animalType = this.getRandomType();
    this.#firstTimer = setInterval(this.hungerValue.bind(this), 1000);
    this.#secondTimer = setInterval(this.happinessValue.bind(this), 1000);
  }

  getName() {
    console.log("Your animals name is :", this.animalName);
  }
  getRandomType(): AnimalTypes {
    const random = Math.floor(Math.random() * 3);
    if (Math.random() < 0.3) return "Maskutchi";
    else if (Math.random() > 0.3 && Math.random() < 0.6) return "Ginjirotchi";
    else return "Darumatchi";
  }
private hungerValue() {
    this.#hungerValue++;
    if (this.#hungerValue == 10) {
      console.log(`${this.animalName} died of hunger...`);
      clearInterval(this.#firstTimer);
      clearInterval(this.#secondTimer);
    }
    console.log("Hunger level:", this.#hungerValue);
    
  }
  private happinessValue() {
    this.#happinessValue--;
    if (this.#happinessValue == 0) {
      console.log(`${this.animalName} died of depression :(`);
      clearInterval(this.#secondTimer);
      clearInterval(this.#firstTimer);
    }
    console.log("Happiness level:", this.#happinessValue);
  }
  isAlive() {
    if (this.#hungerValue > 10 || this.#happinessValue < 0) {
      console.log((this.#isAlive = false));
    } else {
      console.log((this.#isAlive = true));
    }
  }
  play():number {
    this.#happinessValue++;
    return this.#happinessValue;
  }
  feed() {
    this.#hungerValue--;
  }
  reset(){
    this.#happinessValue = 5;
    this.#hungerValue = 5;
    console.clear()
  }
}

export { Tamagotchi, AnimalTypes };
