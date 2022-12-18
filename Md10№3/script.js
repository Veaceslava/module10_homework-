"use stirct";

/* Модудь 10.1*/


/* Модудь 10.1 / Задание 3 */


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    console.log(newString);
  }
  reverseString('Hello');