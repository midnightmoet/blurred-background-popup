const containerElement = document.querySelector('.container');
const buttonElement = document.querySelector('.btn');
const popupContainerElement = document.querySelector('.popup-container');
const closeElement = document.querySelector('.close');

buttonElement.addEventListener('click', () => {
    containerElement.classList.add("active");
    popupContainerElement.classList.remove("active");
});

closeElement.addEventListener('click', () => {
    containerElement.classList.remove("active");
    popupContainerElement.classList.add("active");
    buttonElement.classList.add("active");
});