export default class Person {
  constructor(person) {
    this.firstName = person.firstName;
    this.lastName = person.lastName;
    this.profilePicture = person.profilePicture;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}