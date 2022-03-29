let title = document.querySelector("#h1_ID")
title.classList.add("border")
title.classList.add("title")
title.classList.add("color", "second-class", "background")  // birden fazla class ekleme

title.classList.remove("background", "border")              // birden fazla class silme

console.log(title.classList)