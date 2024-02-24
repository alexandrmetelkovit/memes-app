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
      .then((memes) => {
        this.model.setMemes(memes.data.memes);
      })
      .catch((error) => {
        this.model.setError(true);
      });
  }

  handleModelMemesChanged = (memes) => {
    this.view.renderOptionSelect(memes);

    console.log(memes);
  };

  handleViewGenerateMem = () => {
    this.model.addMemes(mem);
    this.model.setError(false);
  };

  // контроллер слушает изменение модели
  handleModelTextChanged = (textMem, isError) => {
    this.view.renderText(textMem, isError);
  };

  // контроллер умеет слушать от view, что произошло добавление нового текста
  handleViewNewTextMem = (textUp, textDown) => {
    // в модели нужно добавить новый текст
    this.model.addTextMem(textUp, textDown);
  };
}
