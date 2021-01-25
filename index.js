'use strict';
const btns = document.querySelectorAll('#root > button');
// const div = document.getElementById('root');



const clickHandler = (event) => {
    const { target: { dataset: { color }, parentNode, },
    } = event;
    parentNode.style.backgroundColor = color;
};

for (const btn of btns) {
    btn.addEventListener('click', clickHandler);
};


/*
Поменять местами содержимое кнопок
по наведению на кнопку close
*/
