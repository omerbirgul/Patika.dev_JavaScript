let firstName = "Ömer Faruk"
let lastName = "Birgül"
let email = "omerbirgul45@gmail.com"

//string karakter sayısı  ----> .length

console.log(email.length)

//ilk karakteri bulmak    -----> [0]

console.log(firstName[0])
console.log(lastName[4])

// Büyük harf küçük harf   -----> toUpperCase  && to LowerCase

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// String içinde istediğimiz karakteri bulmak -----> search

console.log(email.search("@"))
console.log(email[12])

// belli bir yere kadar al ------> slice

DOMANIN = email.slice(email.search("@") +1)
console.log(DOMANIN)


let kısaltma = DOMANIN.slice(0 , DOMANIN.indexOf("."))
console.log(kısaltma)                                      //sadece gmail' i aldık.


// Bilgiyi değiştir -----> replace 

email = email.replace("gmail.com" , "hotmail.com")
console.log(email)

// İstediğim bilgi var mı kontrol etmek için ------> includes

 email.includes("@")        // true
 email.includes("adsad")    // false

 // İstediğim bilgi ile bitti mi? ------> startWidth , endsWidth

 email.endsWith("hotmail.com")   // true
 email.startsWith("omer")        //true


 //ilk harflerini büyük yapmak

 firstName = "FIRSTNAME"
 let secondName = "secondname"
lastName = "SECONDNAME"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${secondName[0].toUpperCase()}${secondName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)

