'use strict';

console.log('Hello World!!');

const lis = document.querySelectorAll('li');
console.log(lis);  // → NodeList(3) [li, li, li]

console.log(lis[0].textContent);  // → D … Document
console.log(lis[1].textContent);  // → O … Object
console.log(lis[2].textContent);  // → M … Model