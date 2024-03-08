document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene il comportamento predefinito del form
    
    const km = parseFloat(document.getElementById('km').value);
    const age = parseInt(document.getElementById('age').value);
    
    const ticketPrice = km * 0.21; // Prezzo base del biglietto
    
    // Applicazione degli sconti
    if (age < 18) { // Minorenni (sconto del 20%)
        ticketPrice *= 0.8;
    } else if (age >= 65) { // Over 65 (sconto del 40%)
        ticketPrice *= 0.6;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = "Il prezzo del biglietto è: " + ticketPrice.toFixed(2) + "€";
});