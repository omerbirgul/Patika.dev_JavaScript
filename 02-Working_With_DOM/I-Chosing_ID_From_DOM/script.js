//.getElementByID

let title = document.getElementById("title")
title.innerHTML = " değişen bilgi"
console.log(title.innerHTML)



//querySelector

    let link = document.querySelector('#kodluyorumLink')
    link.innerHTML += " değişti"
    link.style.color = "red"
    link.classList.add("btn")
    
     