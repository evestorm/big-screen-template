function init(screenRatioByDesign = 16 / 9) {
  let docEle = document.documentElement;

  function setHtmlFontSize() {
    let screenRatio = docEle.clientWidth / docEle.clientHeight;
    let fontSize = ((
      screenRatio > screenRatioByDesign
        ? (screenRatioByDesign / screenRatio)
        : 1
    ) * docEle.clientWidth) / 10;

    docEle.style.fontSize = fontSize.toFixed(3) + 'px';
  }

  setHtmlFontSize();

  window.addEventListener('resize', setHtmlFontSize);
}

export default init;