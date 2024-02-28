// работа с элементами на странице
class View {
  constructor({ onNewTextMem, onMemesChanged }) {
    this.memesSelectNode = document.getElementById("memesSelect");
    this.textTopInputNode = document.getElementById("textTopInput");
    this.textBottomInputNode = document.getElementById("textBottomInput");
    this.errorNode = document.getElementById("error");

    this.previewMemNode = document.getElementById("previewMem");

    this.previewMemTextTopNode = document.getElementById("previewMemTextTop");
    this.previewMemImgNode = document.getElementById("previewMemImg");
    this.previewMemTextBottomNode = document.getElementById(
      "previewMemTextBottom"
    );
    this.onNewTextMem = onNewTextMem;
    this.onMemesChanged = onMemesChanged;

    this.memesSelectNode.addEventListener("change", this._handleSelectTap);
    this.textTopInputNode.addEventListener("keyup", this._handleTextInput);
    this.textBottomInputNode.addEventListener("keyup", this._handleTextInput);
  }

  _handleTextInput = () => {
    const textTop = this.textTopInputNode.value;
    const textBottom = this.textBottomInputNode.value;

    this.onNewTextMem(textTop, textBottom);
  };

  renderText = (texInsideMeme, isError) => {
    this.errorNode.innerText = "";

    if (isError) {
      this.errorNode.innerText = "Ошибка ввода";
    }

    this.previewMemTextTopNode.innerText = texInsideMeme.textTop;
    this.previewMemTextBottomNode.innerText = texInsideMeme.textBottom;
  };

  //рендерим отображение картинки
  renderOptionSelect = (memes) => {
    this.memesSelectNode.innerHTML = "";

    memes.forEach((mem, i) => {
      this.memesSelectNode.innerHTML += `
  		   <option value="${mem.url}">${mem.name}</option>
  		`;

      if (i === 0) {
        this.renderMemImg(mem.url);
      }
    });

    // второй вариант создания DOM-Элементов
    // this.selectNode.innerHTML = "";
    // memes.forEach((mem, index) => {
    //   const option = document.createElement("option");
    //   option.value = mem.url;
    //   option.innerText = mem.name;
    //   this.memesSelectNode.appendChild(option);

    //   if (index === 0) {
    //     this.renderMemImg(meme.url);
    //   }
    // });
  };

  renderMemImg = (url) => {
    this.previewMemImgNode.src = url;
  };

  _handleSelectTap = () => {
    const selectedNameMem = this.memesSelectNode.value;
    this.renderMemImg(selectedNameMem);
  };
}
