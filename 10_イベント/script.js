'use strict';


const button = document.querySelector('button');
console.log(button);

/*
button.addEventListener("click", () => {
    const p = document.getElementById("target");
    p.classList.toggle("myStyle");
});

button.addEventListener('click', () => {
    const p = document.getElementById('target');
    p.classList.toggle('newStyle');
});

button.addEventListener('mouseenter', () => {
    const p = document.getElementById('target');
    p.style.fontSize = '1.5em';
});

button.addEventListener('mouseleave', () => {
    const p = document.getElementById('target');
    p.style.fontSize = '1em';
});

const img = document.querySelector('img');

img.addEventListener('click', () => {
  img.src = 'https://github.com/ugok-girls.png';
});

img.addEventListener('click', (ev) => {
    // ブラウザー座標系でのクリック位置
    console.log(ev.clientX, ev.clientY);
  });

img.addEventListener('click', (ev) => {
    const p = document.createElement('p');  // p要素を生成
  
    // 要素座標系でのクリック位置
    p.textContent = `X:${ev.offsetX} Y:${ev.offsetY}`;
  
    // 親要素はbody要素、img要素の下に挿入
    document.body.insertBefore(p, img.nextElementSibling);
});

window.addEventListener('resize', () => {
    const p = document.getElementById('target');
    p.style.backgroundColor = 'gold';
});
*/

// a要素の生成
const a = document.createElement('a');
a.href = 'https://zenn.dev/ojk';
a.textContent = 'リンク先に飛びます';

// script要素の上に追加
const script = document.querySelector('script');
document.body.insertBefore(a, script);

button.addEventListener('click', () => {
    a.textContent = 'リンク先に飛びません';
    a.addEventListener('click', (ev) => {
      ev.preventDefault();  // 既定動作をブロック
    });
});

document.addEventListener('contextmenu', (ev) => ev.preventDefault());