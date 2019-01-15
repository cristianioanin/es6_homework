import View from '../views/View.js';
import Student from '../models/Student.js';

export default class StudentView {
  static loadStudents(url) {
    $.ajax({
      url,
      method: 'GET',
      dataType: 'json',
      content: 'application/json',
    }).done(students => {
      const studentsList = students.map(student => new Student(student));
      View.fetchFaces(studentsList);
    });
  }
}