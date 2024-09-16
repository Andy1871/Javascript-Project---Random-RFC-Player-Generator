const player = ['Sam Smith', 'Kelvin E', 'Lewis Wing', 'Tyler Bindon', 'Harvey Knibbs', 'Joel Perreira', 'Andy Yiadom', 'Femi Azeez', 'Amadou Mbengue', 'Jeriel Dorsett'];
const goals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const newClub = ['Birmingham', 'Millwall', 'Madrid', 'Barca', 'Salzburg', 'City', 'United', 'Laurel Park']
const transferFee = ['20mil', '20k', '450k', 30, '150mil', '1mil', '1k', '35mil', '75k']

// 3 sentences needed - how do I store these?

/* Need to create variables that hold the randomised value derived from each array. 
Than need to create sentences using these new variables. */

const randomPlayer = [(Math.floor(Math.random() * player.length))]
const randomGoals = [(Math.floor(Math.random() * goals.length))]
const randomNewClub = [(Math.floor(Math.random() * newClub.length))]
const randomTransferFee = [(Math.floor(Math.random() * transferFee.length))]

let generator = [] // code below needs to somehow create the three sentences separately. formatGenerator then joins them


// MISSING CODE HERE 


const formatGenerator(player) {
    const formatted = generator.join('\n')
    console.log(formatted)
  };

  formatGenerator(generator); 

// ---------------- EXAMPLE CODE BELOW ------------


 function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'signInfo':
        personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'fortuneOutput':
        personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom); 