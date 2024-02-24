// работа с элементами на странице
class View {
  constructor({ onNewTextMem, onMemesChanged }) {
    this.memesSelectNode = document.getElementById("memesSelect");
    this.textUpInputNode = document.getElementById("textUpInput");
    this.textDownInputNode = document.getElementById("textDownInput");
    this.errorNode = document.getElementById("error");

    this.previewMemNode = document.getElementById("previewMem");

    // this.memImgNode = document.getElementById("memImg");
    // this.memTextUpNode = document.getElementById("memTextUp");
    // this.memTextDownNode = document.getElementById("memTextDown");

    this.onNewTextMem = onNewTextMem;
    this.onMemesChanged = onMemesChanged;

    this.memesSelectNode.addEventListener("change", this._handleSelectTap);
    this.textUpInputNode.addEventListener("keyup", this._handleKeyboardInput);
    this.textDownInputNode.addEventListener("keyup", this._handleKeyboardInput);
  }

  _handleKeyboardInput = () => {
    const textUp = this.textUpInputNode.value;
    const textDown = this.textDownInputNode.value;

    this.onNewTextMem(textUp, textDown);
    // console.log(textUp, textDown);
  };

  //рендерим отображение текста из инпута
  renderText(textMem, isError) {
    // this._clearView();
    this.errorNode.innerText = "";

    if (isError) {
      this.errorNode.innerText = "Ошибка ввода";
    }

    this.previewMemNode.innerHTML = "";

    this.previewMemNode.innerHTML += `
          <div class="preview__text">
            <div class='preview__text-up'>${textMem.textUp}</div>
            <div class='preview__text-down'>${textMem.textDown}</div>
         </div> 
				`;
  }

  //рендерим отображение картинки
  renderMemes(memes) {
    this.memesSelectNode.innerHTML = "";

    memes.forEach((mem, index) => {
      this.memesSelectNode.innerHTML += `
  		   <option value="${mem.url}">${mem.name}</option>
  		`;

      if (index === 0) {
        this.renderMemImg(mem.url);
      }
    });

    // второй вариант создания DOM-Элементов
    // this.selectNode.innerHTML = "";
    // memes.forEach((meme, index) => {
    //   const option = document.createElement("option");
    //   option.value = mem.url;
    //   option.innerText = mem.name;
    //   this.memesSelectNode.appendChild(option);

    //   if (index === 0) {
    //     this.renderMemImg(meme.url);
    //   }
    // });
  }

  renderMemImg(url) {
    this.previewMemNode.src = url;
  }

  _handleSelectTap = () => {
    const selectedNameMem = this.memesSelectNode.value;
    this.renderMemImg(selectedNameMem);
  };

  // _clearView() {
  //   this.previewMemNode.innerHTML = "";
  //   this.errorNode.innerText = "";
  // }
}
