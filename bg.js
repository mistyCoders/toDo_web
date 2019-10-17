const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imageNumber) {
    const image = new Image();
    image.src = `images/${imageNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);  //prepend
}

function genRandom() {
    const number = Math.floor(Math.random()*5); 
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();