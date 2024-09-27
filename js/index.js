const comentarios = [
    {
        name: 'Alfred',
        img: 'imgs/avatar1.png',
        text: 'Hello, my name is Alfred. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores id saepe cumque earum laudantium fugiat esse veritatis ea facilis officiis quas ex minus voluptatem, blanditiis dolor sequi praesentium ducimus.'
    },
    {
        name: 'Bruce',
        img: 'imgs/avatar2.webp',
        text: 'Hello, my name is Bruce. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores id saepe cumque earum laudantium fugiat esse veritatis ea facilis officiis quas ex minus voluptatem, blanditiis dolor sequi praesentium ducimus.'
    },
    {
        name: 'Roberta',
        img: 'imgs/avatar3.jpg',
        text: 'Hello, my name is Roberta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores id saepe cumque earum laudantium fugiat esse veritatis ea facilis officiis quas ex minus voluptatem, blanditiis dolor sequi praesentium ducimus.'
    }
]

const titleEl = document.querySelector('h2');
const imgEl = document.querySelector('img');
const textel = document.querySelector('p');
const span = document.querySelectorAll('span');

let idx = 0;
slider()

function slider(){
    titleEl.innerHTML = comentarios[idx].name 
    imgEl.src = comentarios[idx].img 
    textel.innerHTML = comentarios[idx].text
    

    span.forEach((el, index) => {
        el.style.backgroundColor = (index === idx) ? 'white' : 'transparent'
    })
}

document.querySelector('#direita').addEventListener('click', () => {
    idx++
    if(idx===comentarios.length){
        idx=0
    }
    slider()
})
document.querySelector('#esquerda').addEventListener('click', () => {
    if(idx===0){
        idx = 3
    }
    idx--
    slider()
})