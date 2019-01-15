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
      const teachersList = teachers.map(teacher => new Teacher(teacher));
      View.fetchFaces(teachersList);
    });
  }
}