interface CryAnimalInterface {
  execute(): string;
}

abstract class CryAnimal implements CryAnimalInterface {
  constructor(
    protected cry: string,
  ) { this.printCry() }
  execute(): string {
    return this.cry;
  }
  printCry(): void {
    console.log(this.execute());
  }
}

class Dog extends CryAnimal {
  constructor() {
    super("Wouf")
  }
}

class Cat extends CryAnimal {
  constructor() {
    super("Miaow")
  }
}

class Lion extends CryAnimal {
  constructor() {
    super("Roar")
  }
}

let dog = new Dog();


let cat = new Cat();


let lion = new Lion();
