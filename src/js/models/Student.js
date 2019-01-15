import Person from './Person.js';

export default class Student extends Person {
  constructor(person) {
    super(person);
    this.grades = person.grades;
  }

  get averageScore() {
    const gradesCount = Object.values(this.grades).length;
    const gradesTotal = Object.values(this.grades).reduce((a, b) => a + b);

    return (gradesTotal / gradesCount).toFixed(2);
  }
}