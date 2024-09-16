const players = ['Sam Smith', 'Kelvin E', 'Lewis Wing', 'Tyler Bindon', 'Harvey Knibbs', 'Joel Perreira', 'Andy Yiadom', 'Femi Azeez', 'Amadou Mbengue', 'Jeriel Dorsett'];
const newClubs = ['Birmingham', 'Millwall', 'Madrid', 'Barca', 'Salzburg', 'City', 'United', 'Laurel Park']
const transferFees = ['20mil', '20k', '450k', '150mil', '1mil', '1k', '35mil', '75k']

// function to generate a random word from an array

function getRandomElement(array) {
   return array[Math.floor(Math.random() * array.length)] 
}

// function to generate words from specified arrays, and to put these into the final sentence

function generateMysterySentence() {
  const player = getRandomElement(players);
  const newClub = getRandomElement(newClubs);
  const transferFee = getRandomElement(transferFees);


const sentence = `Your player is ${player} and you are transferring to ${newClub} for ${transferFee}.`
return sentence
}


console.log(generateMysterySentence())


