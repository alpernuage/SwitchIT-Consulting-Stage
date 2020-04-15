// printMaterial(): void {
  //   console.log(this.executeMaterial());
  // }
  // printFragility(): void {
    //   console.log(this.executeFragility());
    // }

abstract class Glass {
  constructor(
    protected material: string,
    protected fragile: boolean,
  ) {
    this.executeMaterial()
    this.executeFragility()
  }
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
