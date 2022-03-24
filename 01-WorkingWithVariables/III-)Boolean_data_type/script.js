//Boolean veri tipi ile çalışmak

let isActive = true  // 1
isActive = false     // 0

console.log(isActive)
 //********************************************* */

 let userName;
 let isUsername = Boolean(userName)
 console.log(isUsername)

 Boolean("11")      //true
 Boolean("0")       //true
 Boolean("")        //false


//********************************************* */


userName = "user"
console.log("User Name:", Boolean(userName)) //true oldu çünkü içerisinde bir bilgi var.

//********************************************* */


Boolean(0)       //false
Boolean(-0)      //false
Boolean(-0.1)    //true
Boolean(0 === 0) //true

//********************************************* */

Boolean(userName.length > 0)
console.log("kullanıcı uzunluğu 0 dan büyük")

