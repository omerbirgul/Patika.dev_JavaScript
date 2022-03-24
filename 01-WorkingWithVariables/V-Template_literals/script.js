//************Withuot TEMPLATE LİTERALS *******************/

let userName = "OmerFaruk"
const DOMANIN = "gmail.com"
let email = userName + "@" +  DOMANIN

console.log("Hello", userName, "welcome to our WEB site", "E-mail: ", email)





//***************With TEMPLATE LİTERALS****************** */

let info = `Hello ${userName} welcome to our WEB site.
Your mail adress is: ${email}
Your term debt is: ${(3+5) * 10} $
firt letter of your name is: ${userName[0]}` 

console.log(info)