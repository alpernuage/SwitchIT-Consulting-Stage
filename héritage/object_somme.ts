class Somme {
  constructor(
    public a: number,
    public b: number,
  ) { }
  somme(): number {
    return this.a + this.b;
  }
  divise(): number {
    return this.a / this.b;
  }
}

let total = new Somme(5, 7);
console.log(total.somme());
console.log(total.divise());
