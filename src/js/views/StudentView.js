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
      students.forEach(student => {
        const newStudentObject = new Student(student);
        View.getRandomProfile(newStudentObject);
      });
    });
  }
}