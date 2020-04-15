interface OperationInterface {
  execute(): number;
}

abstract class Operation implements OperationInterface {
  constructor(
    protected a: number,
    protected b: number,
  ) { }
  abstract execute(): number;
  printResult(): void {
    console.log(this.execute());
  }
}

class Somme extends Operation {
  execute(): number {
    return this.a + this.b;
  }
}

class Division extends Operation {
  execute(): number {
    return this.a / this.b;
  }
}

class Somme3numbers implements OperationInterface {
  constructor(
    public a: number,
    public b: number,
    public c: number,
  ) { }
  execute(): number {
    return this.a + this.b + this.c;
  }
}

function printResult(operation:OperationInterface) {
  console.log(operation.execute());
}

let testSomme3numbers = new Somme3numbers(7, 18, 25);
console.log(testSomme3numbers.execute());
printResult(testSomme3numbers)

let operationSomme = new Somme(7, 18);
operationSomme.printResult();

let operationDivision = new Division(7, 18);
operationDivision.printResult();
