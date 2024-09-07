class Animal {

    #name;
    #species;

    constructor(name, species) {
        this.#name = name;
        this.#species = species;
    }
    get name() {
        return this.#name;
    }

    get species() {
        return this.#species;
    }

    set species(newSpecies) {
        this.#species = newSpecies;
    }
    set name(newName) {
        this.#name = newName;
    }
    getInfo() {
        return `Name: ${this.#name}, Species: ${this.#species}`;
    }
}

class Mammal extends Animal {
    #furColor;
    constructor(name, species, furColor) {
        super(name, species);
        this.#furColor = furColor;
    }
    get furColor() {
        return this.#furColor;
    }

    set furColor(newColor){
        this.#furColor = newColor;
    }
    getInfo() {
        return `${super.getInfo()}, Fur Color: ${this.#furColor}`;
    }
}


class Bird extends Animal {
    #wingSpan;
    constructor(name, species, wingSpan) {
        super(name, species);
        this.#wingSpan = wingSpan;
    }
    get wingSpan() {
        return this.#wingSpan;
    }
    set wingSpan(newSpan) {
        this.#wingSpan = newSpan;
    }
    getInfo() {
        return `${super.getInfo()}, Wing Span: ${this.#wingSpan}m`;
    }
}

class Reptile extends Animal {
    #scaleType;
    constructor(name, species, scaleType) {
        super(name, species);
        this.#scaleType = scaleType;
    }
    get scaleType() {
        return this.#scaleType;
    }

    set scaleType(newScale) {
        return this.#scaleType;
    }
    getInfo() {
        return `${super.getInfo()}, Scale Type: ${this.#scaleType}`;
    }
}

class Zoo {
    constructor() {
    this.cages = [];
}

showAnimals() {
    return this.cages.map(animal => animal.getInfo()).join('\n');
}

    addAnimal(newAnimal) {

        this.cages.push(newAnimal);

    }

    removeAnimal(animalToRemove) {
        this.cages = this.cages.filter(animal => animal !== animalToRemove);
    }

    listAnimals() {
        return this.cages.map(newCage => {
            return newCage.getInfo();
            
        })
        
    }

    getSpecies(newSpecies) {
        return this.cages
        .filter(animal => animal.species === newSpecies)
        .map(animal => animal.getInfo());
    }

    countAnimals() {
        return `The number of animals in the Zoo is: ${this.cages.length}`;
    }
}

const theZoo = new Zoo();
const newAn = new Animal('Fester', 'Goldfish')
const chipMunk = new Mammal('Dale','Chipmunk','Brown');
const hooHoo = new Bird('Kevin','Owl', 2);
const tMnT = new Reptile('Leo','Turtle','Strong');


theZoo.addAnimal(newAn);
theZoo.addAnimal(chipMunk);
theZoo.addAnimal(hooHoo);
theZoo.addAnimal(tMnT);

console.log(theZoo.countAnimals());




