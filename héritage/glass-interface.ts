// printMaterial(): void {
//   console.log(this.executeMaterial());
// }
// printFragility(): void {
//   console.log(this.executeFragility());
// }
interface GlassInterface {
  executeMaterial(): string;
  executeFragility(): void;

}
abstract class Glass implements GlassInterface {
  constructor(
    protected material: string,
    protected fragile: boolean,
  ) { this.executeFragility(), this.executeMaterial() }
  executeMaterial(): string {
    console.log(`This is a(n) ${this.material} glass.`);
    return this.material;
  }
  executeFragility(): void {
    if (this.fragile == true) {
      console.log(`${this.material} glasses are fragiles.`)
    } else {
      console.log(`${this.material} glasses aren't fragiles.`)
    }
  }
}

class MetalGlass extends Glass {
  constructor() {
    super("Metal", false)
  }
}

class PlasticGlass extends Glass {
  constructor() {
    super("Glass cup", true)
  }
}

let redGlass = new MetalGlass();
let yellowGlass = new PlasticGlass();
