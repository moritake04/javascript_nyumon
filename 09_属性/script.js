'use strict';

console.log('Hello World!!');

// a要素とimg要素のエレメントを取得
const a = document.getElementById('link');
const img = a.firstElementChild;

// 属性値を書き換えることもできる
console.log(`元のリンクURL: ${a.href}`);
a.href = 'https://loremflickr.com/320/240/dog';

// つまり、JavaScript側で画像を差し替えることもできる
console.log(`元の画像ソース: ${img.src}`);
img.src = 'https://loremflickr.com/320/240/dog';

// a要素のtarget属性の内容で表示するテキストを場合分け
let text;
if (a.target == '_blank') {
  text = '別のタブで開きます';
} else {
  text = '同じタブで開きます';
}

// 変数textの内容を持ったテキストノードを生成（引数で内容を指定）
const textNode = document.createTextNode(text);

// br要素を生成
const br = document.createElement('br');

// 親要素となるp要素（2つ目のp要素）を呼び出して、上記のノードを子要素として追加
//const p = document.getElementsByTagName('p')[1];
//p.appendChild(br);
//p.appendChild(textNode);  // テキストノードもappendChildできる

const p = document.getElementById("p_id")
console.log(p.className)
//p.className = "myStyle"
console.log(p.className)