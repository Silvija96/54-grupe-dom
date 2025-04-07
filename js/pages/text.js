const titleDom = document.getElementById('title');

console.log(titleDom.textContent);
console.log(titleDom.innerText.length);
console.log(titleDom.textContent.length);

// Pakeicia pavadinima 
titleDom.textContent = 'Pomidoras'; // Ilgis- visu simboliu esanciu viduje
titleDom.innerText = 'Agurkas'; // Ilgis- tik esminio turinio(zodzio be tarpu)

const liDom = document.querySelectorAll('ul li');


for (let i = 0; i < liDom.length; i++) {
    liDOM[i].textContent = liDOM[i].textContent.repeat(5) + '!';
}

for (const li of liDom) {
    li.textContent = li.textContent.repeat(3) + '?';
}


const colors = ['yellow', 'green', 'red'];
const vegsDOM = document.querySelectorAll('ol li');
let index = 0;

for (const vegDOM of vegsDOM) {
    //const colorIndedx = Math.floor(Math.random() * color.length);
    const colorIndex = index++ % colors.length;
    const color = colors[colorIndex];
    vegDOM.style.fontSize = (1 + index * 0.5) 'rem';
    vegDOM.style.backgroundColor = 'color';
}

const lrlDOM = document.querySelectorAll('div p');

for (const pDOM of lrlDOM) {
    const { number, color } = pDOM.dataset;
    pDOM.textContent = number + ') ' + pDOM.textContent;
    pDOM.style.backgroundColor = color;
    
    
}

