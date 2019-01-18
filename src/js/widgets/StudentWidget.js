import Widget from '../widgets/Widget.js';

export default class StudentWidget extends Widget {
  static upperFirstChar(string) {
    return string[0].toUpperCase().concat(string.substr(1));
  }

  static insertWidget(student) {
    const widgetEl = $(Widget.createWidget(student));
    Widget.mainContainer.append(widgetEl);
    const detailsEl = widgetEl.find('.card-details');
    const details = `
    <h6 class="card-subtitle text-muted">Student</h6>
    <ul class="list-group mt-3">
    ${Object.entries(student.grades).map(gradeEntry => {
      const [discipline, grade] = gradeEntry;
      return `<li class="list-group-item p-0">${StudentWidget.upperFirstChar(discipline)}: <span>${grade}</span></li>`;
    }).join('')}
    </ul>
    <div class="card-footer">
      <h5 class="${student.averageScore >= 6 ? 'text-success' : 'text-danger'}">
        Average Score: ${student.averageScore}
      </h5>
    </div>
    `;
    detailsEl.append($(details));
  }
}