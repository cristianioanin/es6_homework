import Student from '../models/Student.js';
import StudentWidget from '../widgets/StudentWidget.js';
import TeacherWidget from '../widgets/TeacherWidget.js';
import Widget from '../widgets/Widget.js';


export default class View {
  static fetchFaces(people) {
    Widget.clearWidgets();

    $.ajax({
      url: 'https://randomuser.me/api/?results=10&inc=picture,email',
      method: 'GET',
      dataType: 'json',
      content: 'application/json',
    }).done(faces => {
      people.forEach((person, index) => {
        person.profilePicture = faces.results[index].picture.large;
        person.email = faces.results[index].email;
        if (Student.prototype.isPrototypeOf(person)) {
          StudentWidget.insertWidget(person);
        } else {
          TeacherWidget.insertWidget(person);
        };
      });
    });
  }
}