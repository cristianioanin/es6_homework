import Student from '../models/Student.js';
import StudentWidget from '../widgets/StudentWidget.js';
import TeacherWidget from '../widgets/TeacherWidget.js';
import Widget from '../widgets/Widget.js';


export default class View {
  static getRandomProfile(person) {
    Widget.clearWidgets();

    $.ajax({
      url: `https://randomuser.me/api/?inc=gender,picture,email&gender=${person.gender}`,
      method: 'GET',
      dataType: 'json',
      content: 'application/json',
    }).done(profile => {
      person.profilePicture = profile.results[0].picture.large;
      person.email = profile.results[0].email;
      if (Student.prototype.isPrototypeOf(person)) {
        StudentWidget.insertWidget(person);
      } else {
        TeacherWidget.insertWidget(person);
      };
    });
  }
}