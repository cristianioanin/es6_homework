import StudentView from './views/StudentView.js';
import TeacherView from './views/TeacherView.js';
import Widget from './widgets/Widget.js';

const router = new kendo.Router();

router.route("/", function () {
  Widget.clearWidgets();
});

router.route("/students", () => StudentView.loadStudents('../data/students.json'));

router.route("/teachers", () => TeacherView.loadTeachers('../data/teachers.json'));

$(function () {
  router.start();

  $('.navbar-brand').on('click', () => router.navigate('/'));

  $('#show__students').on('click', () => router.navigate('/students'));

  $('#show__teachers').on('click', () => router.navigate('/teachers'));
});