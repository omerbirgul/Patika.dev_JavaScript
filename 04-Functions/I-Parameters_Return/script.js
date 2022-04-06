let firstName = "Omer"

function greetings(firstName = "") {
    console.log(`merhaba ${firstName}`)
}

console.log(firstName)
greetings("Faruk")


//************************************** */

function greetings2(firstName , lastName ){

    let info = `merhaba ${firstName} ${lastName}`
    return info 
}
let greetingsInfo = greetings2("Omer","Birgul")
console.log(greetingsInfo)

//************************************** */

function domIdWriteInfo( id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info

}

function domIdWriteInfo2(id2,info2){
    let domObject2 = document.querySelector(`#${id2}`)
    domObject2.innerHTML = info2
}

let htmlStyle = `<span style = "color : blue">FENER</span> <span style = "color : yellow">BAHCE</span>`

domIdWriteInfo2("greetings", htmlStyle)
domIdWriteInfo("info", greetings2("Omer","Faruk"))