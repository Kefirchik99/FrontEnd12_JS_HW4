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
}

class Zoo extends Animal {

    constructor(animal, species) {
        super(animal, species);

    }

    addAnimal(newAnimal) {


    }
}

const anim1 = new Animal('Cat', 'feline');
const anim2 = new Reptile('Comodo', 'Rep', 'Big')

console.log(anim1.name);
console.log(anim2.scaleType);