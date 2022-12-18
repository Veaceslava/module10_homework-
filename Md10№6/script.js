"use stirct";

/* Модудь 10.1*/


/* Модудь 10.1 / Задание 6 */


const arr = [1, 2, 3, 3]

let isEqual = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}
}

console.log(isEqual)
