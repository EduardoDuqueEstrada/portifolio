const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const slider = document.querySelector('.setinhas');
const imagens = ["tabela.png", "ogani.png", "elitphoto.png", "consultaPC.png"];
let current = 0;


let img = document.createElement('img');
img.src = imagens[current];
slider.appendChild(img);

leftButton.onclick = e => {
    e.preventDefault();
    current--;
    if (current < 0) {
        current = imagens.length - 1;
    }
    img.src = imagens[current];
};

rightButton.onclick = e => {
    e.preventDefault();
    current++;
    if (current >= imagens.length) {
        current = 0;
    }
    img.src = imagens[current]; 
};
//darmode

  const inputDark = document.querySelector('#darkmode')
const body = document.querySelector('body')
let click = true
inputDark.onclick = e => {
    e.preventDefault()
    if (click) {
        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'
        click = false
    } else {
        body.style.backgroundColor = '#aaa'
        body.style.color = '#000'
        click = true
    }
}