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


document.getElementById('calculate').addEventListener('click', function() {
        var km = parseFloat(document.getElementById('km').value);
        var age = parseInt(document.getElementById('age').value);
        
        var ticketPrice = km * 0.21; // Prezzo base del biglietto
        
        // Applicazione degli sconti
        if (age < 18) { // Minorenni (sconto del 20%)
            ticketPrice *= 0.8;
        } else if (age >= 65) { // Over 65 (sconto del 40%)
            ticketPrice *= 0.6;
        }

        console.log("Il prezzo del biglietto è: " + ticketPrice.toFixed(2) + "€");
    });