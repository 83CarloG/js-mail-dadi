// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1 imposto i dati di input: richiesta Mail
let emailUser = prompt("inserisci la tua mail");
let emailList = ["carlo@libero.it", "cgcolombo@gmail.com", "cgcolombo1983@hotmail.com", "pippo@mail.com", "casa@yahoo.it"];
// Funzione per controllo mail
let mailOk = false;
// Ciclo for per scorrere tutti i valori dell'array contenete le mie mail
for (let i = 0; i < emailList.length; i++) {
// Controllo se l'email è presente
  if (emailList[i] === emailUser) {
    mailOk = true;
  }
}
// Stampo il messaggio
if (mailOk) {
  alert("benvenuto")
}
else {
  alert("Mail sbagliata")
}
// caso minimo
//   if emailList[0] === emailUser {
//     alert("benvenuto");
//   } else {
//     emailList === contol
//   }
