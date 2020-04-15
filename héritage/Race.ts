interface InterfaceRace {
  showTimetoArrival(): number;
  qualification(): void;
  showTimePitStop(): number;
}
abstract class Race implements InterfaceRace {
  constructor(
    protected trademark: string,
    protected speed: number,
    protected distanceofCourse: number,
  ) { this.showTimetoArrival(), this.qualification() }


  protected timePitStop: number;
  showTimePitStop(): number {
    return this.timePitStop;
  }

  protected timetoArrival = this.distanceofCourse / this.speed * 60 + this.showTimePitStop();

  showTimetoArrival(): number {
    console.log(`Your time is ${this.timetoArrival} min`)
    return this.timetoArrival;
  }

  qualification(): void {
    if (this.timetoArrival < 35) {
      console.log("Congratulations! You are qualified")
    } else {
      console.log("Sorry! You are not qualified")
    }
  }
}

class Ferrari extends Race {
  constructor() {
    super("Ferrari", 240, 100);
  }

  showTimePitStop(distancePitStopFerrari: number = 50, timePitStopFerrari: number = 5): number {
    this.timePitStop = this.distanceofCourse / distancePitStopFerrari * timePitStopFerrari;
    return this.timePitStop;
  }
}

class McLaren extends Race {
  constructor() {
    super("McLaren", 220, 100);
    console.log(`The consumptionMcLaren is ${this.consumptionMcLaren()} l`)
  }

  showTimePitStop(distancePitStopMcLaren: number = 100, timePitStopMcLaren: number = 3): number {
    this.timePitStop = this.distanceofCourse / distancePitStopMcLaren * timePitStopMcLaren;
    return this.timePitStop;
  }

  consumptionMcLaren(): number {
    let consumptionMcLaren = this.distanceofCourse * 25 / 100;
    return consumptionMcLaren;
  }
}

let ferrari = new Ferrari();
let mclaren = new McLaren();
//
// Le code ci dessus permet d'avoir le temps réalisé ainsi l'état de qualification par rapport au temps d'arrivé dans une course de voiture. à partir des propriétés communs: la marque, la vitesse, distance de la course, nous obtenons le temps d'arrivé. Le temps d'arrivé est calculé par rapport aux propriétés. Les marques ont aussi des differents propriétés comme le temps de timePitStop qui peut jouer un role pour la classement. en supplément à Ferrari, la marque McLaren permet de voir la consommation total
