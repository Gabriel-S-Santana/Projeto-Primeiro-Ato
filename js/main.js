const button = document.querySelector('.janela')
const popup = document.querySelector('.popup-wrapper')

let screenPopUp = () => {
  popup.style.display = 'block';
};

popup.addEventListener('click', event => {
  let classNameOfClickedElement = event.target.classList[0]
  console.log(classNameOfClickedElement);
  let classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  let shouldClosepopup = classNames.some(classNames => classNames === classNameOfClickedElement)
  //document.alert(classNameOfClickedElement = event.target.classList[0])
  if (shouldClosepopup) {
    popup.style.display = 'none'
  }
});