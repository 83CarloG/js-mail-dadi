// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1 imposto i dati di input: richiesta Mail e lista mail
let serchMail = document.getElementById('mail');
let emailList = ["carlo@libero.it", "cgcolombo@gmail.com", "cgcolombo1983@hotmail.com", "pippo@mail.com", "casa@yahoo.it"];
// imposto la mail false
let mailOk = false;


serchMail.addEventListener("click",
  function() {
    let emailUser = prompt("inserisci la tua mail");
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
  }
);
//
// // Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.
//
// Function MIX
// Funzione per generare un numero casuale
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Lancio i dadi
let dice = document.getElementById('dice');
// // Stabilisco il vincitore, in base a chi fa il punteggio più alto.

function letDice(){
  document.getElementById('playerBot').innerHTML  = "";
  document.getElementById('playerOne').innerHTML  = "";
  document.getElementById('playerBot-result').innerHTML  = "";
  document.getElementById('playerOne-result').innerHTML  = "";


  var playerOne = getRandomInt(1, 7);
  var playerBot = getRandomInt (1, 7);

  document.getElementById('playerBot').innerHTML = playerBot;
  document.getElementById('playerOne').innerHTML = playerOne;
  // Esito dei dadi
  if (playerOne < playerBot) {
    document.getElementById('playerBot-result').innerHTML = "Win";
  }
  else if (playerOne > playerBot) {
    document.getElementById('playerOne-result').innerHTML = "Win";
  }
  else {
    document.getElementById('playerBot-result').innerHTML = "Pari";
    document.getElementById('playerOne-result').innerHTML = "Pari";
  }
}


dice.addEventListener("click", () => letDice(), false);
