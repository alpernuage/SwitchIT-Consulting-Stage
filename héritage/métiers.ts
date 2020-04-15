class Jobs {
  name: string;
  constructor(jobName: string) { this.name = jobName; }
  workTime(hourperWeek: number) {
    console.log(`${this.name} works ${hourperWeek}h per week`);
  }
}

class Teacher extends Jobs {
  constructor(name1: string) { super(name1); }
  workTime(hourperWeek = 25) {
    super.workTime(hourperWeek);
  }
}

class Doctor extends Jobs {
  constructor(name2: string) { super(name2); }
  workTime(hourperWeek = 45) {
    super.workTime(hourperWeek);
  }
}

let alex = new Teacher("Alex is a teacher. He");
let alice = new Doctor("Alice is a doctor. She");

alex.workTime();
alice.workTime(50);

// Solution de Nicolas
// class Job {
//     constructor(public name: string) {}
//     workTime(hourPerWeek: number) {
//         console.log(hourPerWeek);
//     }
// }
