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

let arrayInvitati = ["pepe@example.com" , "sara@example.com" , "drevi@example.com" , "cristian@example.com" , "edoardo@example.com"]; //creazione del mio array degli invitati
let isEmailValid = false;
let mailUtente = prompt("inserisci la tua e-mail");
console.log(mailUtente); //chiedo all'utente di inserire la sua e-mail.

//a questo punto facciamo un ciclo for, dove al suo interno mettiamo la condizione per capire se la sua e-mail è valida: TRUE. Oppure non valida: FALSE.
for(let i=0; i<arrayInvitati.length; i++){
    if(arrayInvitati[i]===mailUtente){
        isEmailValid=true;

    }
    else{
        isEmailValid=false;

    }
}
console.log(isEmailValid);

if(isEmailValid==true){
    console.log("complimenti, la tua e-mail è valida");
}
else{
    console.log("la tua e-mail non è valida");
}


