// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.


// chiediamo all'utente di inserire il numero di km da percorrere

const km = parseInt(prompt("inseirsci il numero di chilometri da percorrere:"));

// chiediamo gli anni dell'utente

const age = parseInt(prompt("quando anni hai: "));

// iniziamo a calcolare il costo del biglietto

const prezzotot = km * 0.21;

// creiamo il ciclo che mi permette di applicare gli sconti

const discount = 0;

if(age < 18){
   discount = prezzotot * 20 / 100;
} else if (age > 65) {
    discount = prezzotot * 40 / 100;
}
alert("Il prezzo totale del biglietto è: ", discount + " €");