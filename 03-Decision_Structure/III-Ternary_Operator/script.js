let userName =prompt("Kullanıcı adı giriniz:")
let info = document.querySelector("#info")

info.innerHTML =`${userName ? userName : "Kullanıcı bilginiz bulunamadı"}`