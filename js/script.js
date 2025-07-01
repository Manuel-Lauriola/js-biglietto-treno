// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const age = prompt(`inserisci la tua età`)
const trip = prompt(`inserisci la distanza in km`)

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let ticket = trip * 0.21

// va applicato uno sconto del 20% per i minorenni

if(age < 18){
  ticket = ticket * 0.8
  let ticketJunior = ticket.toFixed(2)
  console.log("in quanto minorenne il nuovo prezzo del tuo biglietto è di €" + ticketJunior)
}

// va applicato uno sconto del 40% per gli over 65


else if(age > 65){
  ticket = ticket * 0.6
  let ticketSenior = ticket.toFixed(2)
  console.log ("In quanto over 65 hai diritto ad uno sconto del 40% quindi il nuovo prezzo è di €" + ticketSenior)
}

else {
  ticket = ticket.toFixed(2)
  console.log("non hai diritto a sconti il costo del tuo biglietto è di €" + ticket)
}

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)