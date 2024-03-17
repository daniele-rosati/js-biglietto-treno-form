
  // Gestore dell'evento di invio del form
  document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito del form

    // Ottieni i valori inseriti dall'utente
    const kilometers = parseFloat(document.getElementById('kmInput').value);
    const age = parseInt(document.getElementById('ageInput').value);

    // Calcola il prezzo del biglietto
    const ticketPricePerKm = 0.21;
    let totalPrice = kilometers * ticketPricePerKm;

    // Applica gli sconti
    if (age < 18) {
      const discount = totalPrice * 0.2;
      totalPrice -= discount;
    } else if (age >= 65) {
      const discount = totalPrice * 0.4;
      totalPrice -= discount;
    }

    // Formatta il prezzo finale
    totalPrice = totalPrice.toFixed(2);

    // Mostra il recap dei dati e il prezzo finale in pagina
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h2>Recap Dati:</h2>
      <p>Chilometri da percorrere: ${kilometers} km</p>
      <p>Età del passeggero: ${age} anni</p>
      <h2>Prezzo Finale:</h2>
      <p>Il prezzo totale del viaggio è: ${totalPrice} €.</p>
    `;
  });