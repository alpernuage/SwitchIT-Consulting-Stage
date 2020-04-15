// class Glass {
//   material: string;
//   volume: number;
//   height: number;
//   color: string;
//   constructor(material: string, volume: number, height: number, color: string) {
//     this.material = material;
//     this.volume = volume;
//     this.height = height;
//     this.color = color;
//   }
// }
// au lieu de code ci dessus on poeut utiliser le code simplifié comme ci-dessous

class Glass {
  constructor(
    public material: string,
    public surfaceSole: number,
    public height: number,
    public color: string,
  ) { }

  volume(): number {
    return this.surfaceSole * this.height;
  }
}

let glass1 = new Glass("plastic", 7, 5, "orange");
console.log(glass1.volume());

console.log(glass1);
