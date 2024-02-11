/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
 
/* I data type possono essere numeri, stringhe, boolean, Undefined, null, object, aray, function, symbol*/
let numero = 2 ;  // numeri
let cognome  = "Mazzilli"; //  stringa
let codiceFiscale = true ; // boolean
let a = null // valore vuoto o resettato 
let valorenondefinito; //creata variabile priva di contenuto, quindi undefined
let scuola = { nome : "Don bosco", classe:1, sezione:"a", numeroBambini: 15, }
let alfabeto = [ "a","b","c","d","e","f","g","h" ] //creato un array con l'alfabeto
// Function e Symbol // non sono stati studiati

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue:
 Un oggetto è un contenitore dentro il quale possono essere raccolti molteplici dati di vario tipo.
 Un oggetto quindi è composto da coppie chiave-valore, dove ogni chiave è una stringa (o un simbolo)
  mentre il valore può essere  di qualsiasi tipo di dato

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.

*/
let d = 12;
let b = 20;
let c = d + b;



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let nome = "Giuseppe";


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "Jhon"


console.log( name1 !== name2);

console.log( name2.toLowerCase() === name1.toLowerCase());



