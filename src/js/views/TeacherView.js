import View from '../views/View.js';
import Teacher from '../models/Teacher.js';

export default class TeacherView {
  static loadTeachers(url) {
    $.ajax({
      url,
      method: 'GET',
      dataType: 'json',
      content: 'application/json',
    }).done(teachers => {
      teachers.forEach(teacher => {
        const newTeacherObject = new Teacher(teacher);
        View.getRandomProfile(newTeacherObject);
      });
    });
  }
}