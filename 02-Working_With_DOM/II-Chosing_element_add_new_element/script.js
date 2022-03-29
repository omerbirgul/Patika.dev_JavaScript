let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "Son öğe değişti"
console.log(lastChild)

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "İlk öğe değişti"
console.log(firstChild)


let ulDOM = document.querySelector("ul#list")   // Eklenen öğeyi nereye ekleyeceğimizi belirledik ==> id'si list olan ul'ye eklndi

let liDOM01 = document.createElement("li")        //Nereye ekleneceğinden sonra ne olarak ekleneceğine karar verdik ==> li olarak.
let liDOM02 = document.createElement("li")

liDOM01.innerHTML = "Sonrada eklenen BİRİNCİ öğe"        // Eklenen öğeyi istediğmiz gibi değiştirdik.
liDOM02.innerHTML = "Sonradan eklenen İKİNCİ öğe"

ulDOM.append(liDOM01)                             // Son olarak atama işlemini yaptık.
                                                  // append  ==> EN SONA ekledi
ulDOM.prepend(liDOM02)                            // prepend ==> EN BAŞA ekledi


