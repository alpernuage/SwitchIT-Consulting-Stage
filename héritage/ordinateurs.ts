class Computers {
  constructor(public operatingSystem: string, public ram: string, public equipment: string) { }
  price(computerPrice: number) {
    console.log(computerPrice);
  }
}

class Mac extends Computers {
  constructor(appleStore: string, itunes: string) { super(appleStore, itunes); }
  price(computerPrice) {
    super.price(computerPrice);
  }
}

class Pc extends Computers {
  constructor(windows: string) { super(windows); }
  price(computerPrice) {
    super.price(computerPrice);
  }
}

let mac = new Mac("appleStore2", "itunes3");
let pc = new Pc("windows 10");

mac.price(100);
pc.price(50);
