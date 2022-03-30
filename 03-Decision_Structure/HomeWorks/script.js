var time = new Date();
var loginInfo = prompt("Lütfen Adınızı Soyadınızı Giriniz:")
var userName = document.querySelector('#name')
var info = document.querySelector('.text2')
var currentDate = document.querySelector('#date')


var dateTime = `${time.getDate()}. ${time.getMonth()+1}. ${time.getFullYear()} /// ${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}`

userName.innerHTML = loginInfo
currentDate.innerHTML = dateTime
info.innerHTML = `you entered to Patika.dev JavaScript HomeWork01`
