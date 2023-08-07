'use strict'

const bmi = window.prompt("BMIの値を入力してください")
const p_element = document.getElementById("message")
console.log(`あなたのBMIは${bmi}です`)

let log_str
if (bmi > 25) {
    console.log("肥満です！！！！")
    log_str = "肥満です！！！！"
} else {
    console.log("肥満ではありません")
    log_str = "肥満ではありません"
}

console.log(p_element.textContent)

p_element.textContent = log_str