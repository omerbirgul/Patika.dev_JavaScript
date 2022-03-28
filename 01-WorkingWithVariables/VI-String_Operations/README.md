# String Veri Türü İşlemleri

- String değişkenlerde karakter sayısını bulmak için `.length` kullanılır.
    ```sh
    console.log(email.length)  
    ```

- Değişkendeki istenilen sıradaki karakteri bulmak için `[0]` kullanılır.
    ```sh
    console.log(firstName[0])
    ```

- Değişkenleri büyük harf/ küçük harf olarak değiştirmek için `toUpperCase / toLowerCase` kullanılır.
    ```sh
    firstName = firstName.toUpperCase()
    ```
    ```sh
    firstName = firstName.toLowerCase()
     ```

- Stirng içerisinde istediğimiz karakteri bulmak için `.search` kullanılır.
    ```sh
    console.log(email.search("@"))
    ```

- Değişkende belli bir yere kadar/ belli bir yerden sonra al komutu için `.slice` kullanılır.
    ```sh
    email.slice(email.search("@"))
    ```

- Değişkendeki bilgiyi değiştrimek için `.replace` kullanılır.
    ```sh
    email = email.replace("gmail.com" , "hotmail.com")
    ```

- Değişkende istenilen bilgi var mı kontrol etmek için `.includes` kullanılır.
    ```sh
     email.includes("@")        // true
     email.includes("adsad")    // false
     ```