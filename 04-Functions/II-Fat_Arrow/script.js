function hello(firstName){
    console.log(`merhaba ${firstName}`)
}

hello('dunya')

// *****************************


const helloFunction_V01 = (firstName) => {console.log(`Merhaba ${firstName}`)}
helloFunction_V01('Versiyon 01')

// *****************************

const helloFunction_V02 = firstName => console.log(`merhaba ${firstName}`)  //Bir parametre bir dönüş işlemi olduğu zaman kullanılır.
helloFunction_V02('Versiyon 02')

// *****************************

const helloFunction_V03 = (firstName, lastName , versiyon) =>{
let info = `merhaba ${firstName} ${lastName} ${versiyon}`
console.log(info)
return info
}   
helloFunction_V03('Ömer', 'Birgül', 'versiyon 03')