let priceString = "100"
let priceInt = 100
let user = "guest"

//Eşitse  (==)
console.log(priceInt == 100)         //true
console.log(priceString == 100)      //true
console.log(priceInt == 10)          // false

// Hem değeri hem de türü eşitse   (===)

console.log(priceInt === 100)         //true
console.log(priceString === 100)      //false


//Eşit değilse      (!=)

console.log(user != "guest")      // false
console.log(user != 100)          // true

// < Küçükse
console.log("price < 100", priceInt < 100)

// <= Küçük veya eşitse
console.log("price <= 100", priceInt <= 100)

// > Büyükse
console.log("price > 200", priceInt > 200)

// >= Büyük veya eşitse
console.log("price >= 100", priceInt >= 100)


// && ve
priceInt = 0
console.log( priceInt > 0 && user != "guest" )

// || veya
console.log( priceInt > 0 || user != "guest" )

// ! degil (tersi)
user = "guest"
priceInt = 1
console.log( priceInt > 0 && !user == "guest" )