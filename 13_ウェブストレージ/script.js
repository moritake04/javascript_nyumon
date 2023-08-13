'use strict';

const storage = localStorage;

const input = document.querySelector('input');    // input要素
const output = document.getElementById('output'); // div#output要素
const submit = document.getElementById('submit'); // button#submit要素

// ［記録］ボタンを押したら…
submit.addEventListener('click', () => {
    output.textContent = input.value; // div要素に表示
    storage.store = input.value
    input.value = "";
});

document.addEventListener('DOMContentLoaded', () => {
    const storagedData = storage.store;  // ストレージデータの取得
    output.textContent = storagedData;   // div要素に出力

    if (storage.store == undefined) {
        output.textContent = "ここに内容を表示します";
    } else {
        const storagedData = storage.store;
        output.textContent = storagedData;
    }
});

const remove = document.createElement('button');
remove.textContent = 'ストレージデータを削除';
document.body.insertBefore(remove, output.nextElementSibling);

remove.addEventListener('click', () => {
    delete storage.store;
    output.textContent = '';
});

const link = document.createElement("button");
link.textContent = "別ページへ飛ぶ";
document.body.insertBefore(link, remove)

link.addEventListener("click", () => {
    location.href = "page.html";
});