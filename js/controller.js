//логика связи(совмещение) модели и отображения
class Controller {
  constructor() {
    //контроллер знает про Model и View
    this.model = new Model({
      onTextChanged: this.handleModelTextChanged,
      onMemesChanged: this.handleModelMemesChanged,
    });

    this.view = new View({
      onNewTextMem: this.handleViewNewTextMem,
    });

    this.api = new API();
  }

  init() {
    this.api
      .fetchMemes()
      .then((response) => {
        this.model.setMemes(response.data.memes);
      })
      .catch((error) => {
        this.model.setError(true);
      });
  }

  handleModelMemesChanged = (memes) => {
    this.view.renderOptionSelect(memes);
  };

  // контроллер слушает изменение модели
  handleModelTextChanged = (texInsideMeme, isError) => {
    this.view.renderText(texInsideMeme, isError);
  };

  // контроллер умеет слушать от view, что произошло добавление нового текста
  handleViewNewTextMem = (textTop, textBottom) => {
    // в модели нужно добавить новый текст
    this.model.addTextMem(textTop, textBottom);
  };
}
