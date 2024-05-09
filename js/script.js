
// -Creo una variabile per selezionare, nel mio file html, il trigger per, "in questo caso",raccogliere dati dall utente.
const bottoneForm = document.querySelector(".bottone-invio");


bottoneForm.addEventListener("click", function(){
    
    // -Creare una variabile da associare al .value inserito dall'utente nell'imput km percorsi
    const kmPercorsi = document.querySelector("#km").value
    console.log(kmPercorsi)

    // -Creare una variabile da associare al .value inserito dall'utente nell'imput età passeggero
    const etaPassegero = document.querySelector("#eta").value
    console.log(etaPassegero)

    // -Creare una variabile prezzo al km 
    const prezzoAlKm = 0.267113

    //Creare una variabile prezzo complessivo
    const prezzo = prezzoAlKm * kmPercorsi

    //Creare una variabile percentuale sconto 
    let percentualeSconto;

    // -Creare un if e associare lo sconto all'età inserita
    if (etaPassegero < 21){
        percentualeSconto = 24.552
    } else if (etaPassegero > 63){
        percentualeSconto = 37.893
    } else {
        percentualeSconto = 0
    }

    // -Creare variabile dello sconto 
    const prezzoComplessivo = prezzo - (prezzo / 100 * percentualeSconto)
    console.log(prezzoComplessivo)


});


//------------HAMBURGER MENU------------

const hamburgerMenu = document.querySelector(".bottone-hamburger-menu");

hamburgerMenu.addEventListener("click", function(){
    document.querySelector(".header-nav").classList.toggle("blue")
    document.querySelector("#header").classList.toggle("light-blue")

})






