Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

# Flow (progetto principale)
Descrivo un ciclo for: eseguo un codice per ogni numero assegnato a una variabile che parte da 1 e incrementa fino a 100
    ? SE il numero è divisibile solo per 3
        mostro in console "Fizz"
    ? SE INVECE il numero è divisibile solo per 5
        mostro in console "Buzz"
    ? SE INVECE il numero è dividibile per 3 E per 5
        mostro in console "FizzBuzz"
    ALTRIMENTI
        mostro in console solo il numero

# BONUS 1 (cartella bonus)
All'inizio dello script, recupero dall'HTML il div#container
Nel ciclo for
    Dichiaro una variabile "div" non inizializzata
        All'interno della PRIMA condizione
            Creo un elemento HTML con metodo createElement() e lo assegno alla variabile "div"
            Inserisco come contenuto dell'elemento il testo "Fizz" attraverso la proprietà innerText
            Con il metodo append(), aggiungo in coda l'elemento creato
        All'interno della SECONDA condizione
            Creo un elemento HTML con metodo createElement() e lo assegno alla variabile "div"
            Inserisco come contenuto dell'elemento il testo "Buzz" attraverso la proprietà innerText
            Con il metodo append(), aggiungo in coda l'elemento creato
        All'interno della TERZA condizione
            Creo un elemento HTML con metodo createElement() e lo assegno alla variabile "div"
            Inserisco come contenuto dell'elemento il testo "FizzBuzz" attraverso la proprietà innerText
            Con il metodo append(), aggiungo in coda l'elemento creato
        All'interno dell'ELSE
            Creo un elemento HTML con metodo createElement() e lo assegno alla variabile "div"
            Inserisco come contenuto dell'elemento il testo la variabile di iterazione attraverso la proprietà innerText
            Con il metodo append(), aggiungo in coda l'elemento creato

# BONUS 2 (cartella bonus)
In TUTTE le condizioni
    Aggiungo alla variabile "div" la proprietà classList con metodo add() per aggiungere uno stile CSS diverso per ogni situazione