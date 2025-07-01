// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const age = prompt(`inserisci la tua età`)
const trip = prompt(`inserisci la distanza in km`)

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const ticket = (trip * 0.21)
console.log `${ticket + "€"}`

// va applicato uno sconto del 20% per i minorenni

const ticketJunior = (`${ticket}` * 0.80)

if(age < 18){
  console.log `In quanto minorenne hai diritto ad uno sconto del 20% quindi ${ticketJunior + "€"}`
}

// va applicato uno sconto del 40% per gli over 65

const ticketSenior = (`${ticket}` * 0.6)

if(age > 65){
  console.log `${ticketSenior + "€"}`
}

else {
  console.log `${ticket + "€"}`
}



