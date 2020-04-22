const burgerButton = document.getElementById('burger-button');
const popupContainer = document.getElementById('popup-container');

let showPopup = () => {
    popupContainer.classList.remove('hidden--translate');
    burgerButton.classList.add('header__burger-button--active');
    burgerButton.childNodes[1].classList.add('burger-button--active');

    burgerButton.removeEventListener('click', showPopup);
    burgerButton.addEventListener('click', closePopup);
};

let closePopup = () => {
    popupContainer.classList.add('hidden--translate');
    burgerButton.classList.remove('header__burger-button--active');
    burgerButton.childNodes[1].classList.remove('burger-button--active');

    burgerButton.removeEventListener('click', closePopup);
    burgerButton.addEventListener('click', showPopup);
};

burgerButton.addEventListener('click', showPopup);