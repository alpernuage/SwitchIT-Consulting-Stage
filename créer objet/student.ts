class Student {
  constructor(
    public name: string,
    public surname: string,
    public studentNumber: number,
    public age: number,
    public school: string,
    public ville: string,
    public bachelor: boolean,
  ) { }

  bacaloreat(): string {
    if (this.bachelor==true) {
      return "bachelor obtained";
    }
    else {
      return "bachelor did't obtain";
    }
  }
}


let student = new Student("John", "Pierre", 1555, 13, "Université d'Aix-Marseille", "Venelles", false);

console.log(student);
console.log(student.bacaloreat());
