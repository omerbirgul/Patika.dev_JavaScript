let userName = prompt("Kullanıcı adı giriniz:")
 
if(userName.length){
    console.log(`Kullancı adınız: ${userName}`)
}
else if(userName.length <= 0 ){
    console.log(`Kullancı bilginiz yok`)
}