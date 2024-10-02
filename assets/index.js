console.log('Ciao');

// TRACCIA
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// FASI COMMENTATE
// Creare ciclo
// Creare variabili
// Creare condizioni


// Fase 1: Preparazione


// Fase 2: Raccolta Dati


// Fase 3: Elaborazione Dati
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0 ) {
        console.log('Fizz');
    } else if (i % 5 === 0 ) {
        console.log('Buzz');
    } else if (i % 3 === 0 ) {
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}

//Fase 4: Output