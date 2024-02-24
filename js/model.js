class Model {
  // метод onMemesChanged
  constructor({ onTextChanged, onMemesChanged }) {
    // массив из мемов
    this.memes = [];
    // объект из двух строк
    this.textMem = {};

    // ошибка при большом количестве введенных символов
    this.isError = false;

    this.onTextChanged = onTextChanged;
    this.onMemesChanged = onMemesChanged;
  }

  // добавление нового объекта в виде текста
  addTextMem(textUp, textDown) {
    this.isError = false;

    if (this._isTextValid(textUp, textDown)) {
      this.textMem = {
        textUp,
        textDown,
      };
    } else {
      this.isError = true;
    }

    //оповещение об изменении данных
    this.onTextChanged(this.textMem, this.isError);
  }

  setMemes(memes) {
    this.memes = memes;

    this.onMemesChanged(this.memes);
  }

  getMemes() {
    return this.memes;
  }

  addMemes(mem) {
    this.memes.push(mem);

    this.onMemesChanged(this.memes);
  }

  setError() {
    this.isError = this.isError;
    this.onMemesChanged(this.memes, this.isError);
  }

  //валидация текста
  _isTextValid(textUp, textDown) {
    return textUp.length < 20 && textDown.length < 20;
  }

  // setMemes(memes) {
  //   this.memes = memes;

  //   memes.forEach((mem) => {
  //     this.memes = mem;
  //   });

  //   this.onMemesChanged(this.memes);
  // }

  // getTextMems() {
  //   return this.textMem;
  // }
}
