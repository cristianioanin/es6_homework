export default class Widget {
  static get mainContainer() {
    return $('#main-container .row');
  }

  static clearWidgets() {
    this.mainContainer.empty();
  }

  static createWidget(person) {
    const widgetElMarkup = `
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <img class="card-img-top rounded-circle" src="${person.profilePicture}" alt="${person.fullName}">
        <div class="card-body">
          <h5 class="card-title">${person.fullName}</h5>
          <div class="card-details">

          </div>
        </div>
      </div>
    </div>
    `;

    return widgetElMarkup;
  }
}