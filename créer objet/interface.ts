class Table {
  constructor(
    public material: string,
    public surface: number,
    public height: number,
    public length: number,
    public color: string,
  ) { }

  name(): string {
    return this.color + " table";
  }
}


let table = new Table("plastic", 7, 5, 3, "orange");
console.log(table.name());

console.log(table);
