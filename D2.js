/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 4;
let num2 = 2;
if (num1 > num2) {
  console.log("Il primo numero é piú grande");
} else if (num1 < num2) {
  console.log("Il secondo numero é piú grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 != 5) {
  console.log("not equal");
} else if ((num1 = 5)) {
  console.log("il numero é uguale a 5");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 10;

if (num5 % 5 === 0) {
  console.log("Il numero é divisibile per 5");
} else if (num5 % 5 === 0) {
  console.log("Il numero non é divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 6;
let num4 = 2;

if (num3 === 8 || num4 === 8) {
  console.log("Uno dei due numeri interi é uguale a 8");
} else if (num3 + num4 === 8) {
  console.log("la somma dei due numeri interi da come risultato 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 51;
if (totalShoppingCart > 50) {
  console.log(
    "Hai diritto alla spedizione gratuita!Il costo totale é di",
    totalShoppingCart,
    "euro"
  );
} else {
  totalShoppingCart2 = totalShoppingCart + 10;
  console.log(
    "Il costo totale della tua spesa é di",
    totalShoppingCart2,
    "euro"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart3 = 51;
let sconto = (totalShoppingCart3 / 100) * 20;
let totalShoppingCart4 = totalShoppingCart3 - sconto;
console.log(
  "Il totale della tua spesa é di",
  totalShoppingCart4,
  "euro, escludendo le spese di spedizione"
);

if (totalShoppingCart4 <= 50) {
  console.log("la tua spesa aumenta a ", totalShoppingCart4 + 10, "euro");
} else {
  console.log(
    "Vista la promozione il totale della tua spesa é ",
    totalShoppingCart4,
    "euro"
  );
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let var1 = 5;
let var2 = 3;
let var3 = 7;

if (var1 > var2 && var1 > var3) {
  if (var2 > var3) {
    console.log(var1, var2, var3);
  } else {
    console.log(var1, var3, var2);
  }
} else if (var2 > var1 && var2 > var3) {
  if (var1 > var3) {
    console.log(var2, var1, var3);
  } else {
    console.log(var2, var3, var1);
  }
} else if (var3 > var1 && var3 > var2) {
  if (var1 > var2) {
    console.log(var3, var1, var2);
  } else {
    console.log(var3, var2, var1);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = 5;
if (typeof valore === `number`) {
  console.log("il valore fornito é un numero");
} else {
  console.log("Il valore fornito non é un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore2 = 8;
if (valore2 % 2 === 0) {
  console.log("Il valore fornito é pari");
} else {
  console.log("Il valore fornito é dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 5;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val <= 5) {
  console.log("Minore o uguale a 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(me.skills);
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = [];

array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);

console.log(array);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array.pop();
array.push(100);
console.log(array);
