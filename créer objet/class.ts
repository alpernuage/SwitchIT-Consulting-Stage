class Class {
  constructor(
    public quantityMan: number,
    public quantityWoman: number,
    public surface: number,
    public teacher: string,
    public noteAverage: number,
  ) { }

  countStudents(): number {
    return this.quantityMan + this.quantityWoman;
  }
}


let class1 = new Class(17, 15, 60, "Jack", 15);
console.log(class1.countStudents());

console.log(class1);
