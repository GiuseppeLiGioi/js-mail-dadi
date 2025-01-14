/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/

let arrayInvitati = [
    "pepe.21@gmail.com",
    "cristian.sanna@gmail.com",
    "drevi.murru@gmail.com",
    "edoardo.14@gmail.com",
    "sara.dex@gmail.com"
  ]; //creazione del mio array degli invitati
  


let mailUtente = prompt("inserisci la tua e-mail");
let isEmailValid = false;
//chiedo all'utente di inserire la sua e-mail.

//a questo punto facciamo un ciclo for, dove al suo interno mettiamo la condizione per capire se la sua e-mail è valida: TRUE. Oppure non valida: FALSE.
for(let i=0; i < arrayInvitati.length; i++){
    if(arrayInvitati[i] === mailUtente){
        isEmailValid=true;
        break; //con il break, se trova la e-mail esce dal ciclo.  //senza il break non visualizza il risultato corretto.

    }
    else{
        isEmailValid=false;

    }
}
console.log(isEmailValid);

if(isEmailValid == true){
    console.log("complimenti, la tua e-mail è valida");
}
else{
    console.log("Siamo spiacenti, la tua e-mail non è valida");
}




/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

//DICHIARIAMO LE VARIABILI CHE CONTERRANNO IL VALORE DEL GIOCATORE E DEL COMPUTER
let numeroGiocatore =  Math.floor(Math.random() * 6) + 1; //.random genera un numero tra 0 e 1 (escluso)... *6 moltiplica il numero e floor lo arrotonda per difetto a 5. 
let numeroComputer =  Math.floor(Math.random() * 6) + 1; // Ne consegue che il +1 serve per creare intervallo 1-6.
console.log(`ecco il numero del giocatore: ${numeroGiocatore}`)
console.log(`ecco il numero del computer: ${numeroComputer}`)
if(numeroGiocatore > numeroComputer){
    console.log(`il Giocatore ha vinto perche: ${numeroGiocatore} è piu grande di: ${numeroComputer}`);
}
else if(numeroGiocatore == numeroComputer){
    console.log(`Pareggio! perchè: ${numeroComputer} è uguale a: ${numeroGiocatore}`);
}
else{
    console.log(`il Computer ha vinto perche ${numeroComputer} è piu grande di ${numeroGiocatore}`);
}
