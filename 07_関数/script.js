'use strict';

console.log('Hello World!!');

const servants = ["犬", "猿", "雉"];

function showServants(servants) {
    console.log("現在の家来は: ");
    for (const servant of servants) {
        console.log(servant);
    }
    console.log(`の総勢 ${servants.length}名です。`)

    return servants[servants.length-1];
}

let saigo
saigo = showServants(servants);
console.log(`最後のやつは${saigo}`);

servants.push("俺");
saigo = showServants(servants);
console.log(`最後のやつは${saigo}`);

const showServantsAllow = (servants) => {
    console.log("現在の家来は: ");
    for (const servant of servants) {
        console.log(servant);
    }
    console.log(`の総勢 ${servants.length}名です。`)

    return servants[servants.length-1];
}

saigo = showServantsAllow(servants);
console.log(`最後のやつは${saigo}`);

const obj = {
    name: "OJK",
    sayHello() {
        console.log("こんにちは")
    },
    sayHelloTwice() {
        this.sayHello();
        this.sayHello();
    },
}

obj.sayHelloTwice();