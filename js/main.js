const listaSpesa = [
    "pane",
    "pasta",
    "uova",
    "latte",
    "carne"
];

let listaDoc = document.getElementById("lista-spesa")
console.log(listaSpesa);

let i = 0

while (i < listaSpesa.length){
    prodottoSingolo = (listaSpesa[i])
    console.log(prodottoSingolo)
    i++
    listaDoc.innerHTML += prodottoSingolo + " "
}

