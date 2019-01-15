import Widget from './Widget.js';

export default class TeacherWidget extends Widget {
  static insertWidget(teacher) {
    const widgetEl = $(Widget.createWidget(teacher));
    Widget.mainContainer.append(widgetEl);
    const detailsEl = widgetEl.find('.card-details');
    const details = `
      <h6 class="card-subtitle mb-2 text-muted">${teacher.academicRank}</h6>
      <h6 class="card-subtitle mb-5 text-info">${teacher.email}</h6>
      <p class="card-text">Discipline: ${teacher.discipline}</p>
      <p class="card-text">Specialization: ${teacher.specialization}</p>
    `;
    detailsEl.append($(details));
  }
}