'use strict'
const checkbox = document.getElementById('checkbox');
const p = document.getElementById('p');
const a = document.getElementById('a');

console.log(p);
console.log(a);

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    p.classList.toggle('light');
    a.classList.toggle('light');

})