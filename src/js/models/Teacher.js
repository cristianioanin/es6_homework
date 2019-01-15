import Person from '../models/Person.js';

export default class Teacher extends Person {
  constructor(person) {
    super(person);
    this.discipline = person.discipline;
    this.specialization = person.specialization;
    this.academicRank = person.academicRank;
  }
}