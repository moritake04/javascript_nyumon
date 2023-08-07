'use strict';

/*
const etoList = ["ネズミ", "ウシ", "トラ", "ウサギ"]

const ul = document.getElementById("list")

for (let eto of etoList) {
    const li = document.createElement("li")
    li.textContent = eto
    ul.appendChild(li)
}
*/

const numList = [1, 2, 3, 4, 5, 6, 7, 8]

const evenList = numList.filter((num) => num % 2 == 0).map((even) => "No. " + even)

const ul = document.getElementById("list")

for (const even of evenList) {
    const li = document.createElement("li")
    li.textContent = even
    ul.appendChild(li)
}