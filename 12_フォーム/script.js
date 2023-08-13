'use strict';

const p = document.getElementById('output'); // 出力用のp要素

// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
    const text = document.getElementById("textInput");
    p.textContent = text.value;
});

const form = document.querySelector('form');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const p = form.firstElementChild; // formの最初の子要素 → p要素
  p.textContent = form.formInput.value; // form.formInput → input要素
});