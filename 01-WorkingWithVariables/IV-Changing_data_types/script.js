let price = 111;
let stringPrice = "11";
let hasPasswords = true;

console.log(
    "Price :" , typeof(price) ,
    "String Price:" , typeof(stringPrice) ,
    "Passwords: " ,  typeof(hasPasswords)
)

// String metinleri Integer ve Float türüne dönüştürmek:

let number1 = "11";
number1 = parseInt(number1);
console.log("type of number1:", number1 , typeof(number1));

let number2 = "25px";
number2 = parseInt(number2);
console.log("type of number2:", number2 , typeof(number2));

let number3 = "78.3";
number3 = Number(number3);
console.log("type of number3: ", number3, typeof(number3));

let number4 = "18.4";
number4 = parseFloat(number4);
console.log("type of number4: ", number4, typeof(number4));

// Number veri tipinden String veri tipine dönüştürme:

let number5 = 55;
number5 = number5.toString();
console.log("type of number5: ", number5, typeof(number5))