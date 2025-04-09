import { foodList } from '../data/pica.js';
import { foodBlock } from '../components/foodBlock.js';

const currency = 'Eur';

const foodListDOM = document.querySelector('.food-list');
let HTML = '';
for (const item of foodList) {
    HTML += foodBlock(item, currency);
    ;
}

foodListDOM.innerHTML = HTML;