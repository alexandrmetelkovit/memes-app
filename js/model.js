class Model {
  constructor({ onTextChanged, onMemesChanged }) {
    this.memes = [];
    this.texInsideMeme = {};

    this.isError = false;

    this.onTextChanged = onTextChanged;
    this.onMemesChanged = onMemesChanged;
  }

  setMemes(memes) {
    this.memes = memes;

    this.onMemesChanged(this.memes);
  }

  addTextMem(textTop, textBottom) {
    this.isError = false;

    if (this._isTextValid(textTop, textBottom)) {
      this.texInsideMeme = {
        textTop,
        textBottom,
      };
    } else {
      this.isError = true;
    }

    this.onTextChanged(this.texInsideMeme, this.isError);
  }

  _isTextValid(textTop, textBottom) {
    return textTop.length <= 30 && textBottom.length <= 30;
  }
}
