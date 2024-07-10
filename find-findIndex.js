// Methods that iterate over an array
// Methods that DO NOT modify the original array (Immutability)

// find()
// encuentra el primer elemento que cumpla x

const multipleOf5 = [5, 10, 15, 20, 25, 30, 35];
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(multipleOf5); // [5, 10, 15, 20, 25, 30, 35]
console.log(firstNumberGreaterThan10); //15

// findIndex()
// Devuelve la posición del primer elemento que cumpla x
const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber); //[ 6, 14, 27, 56, 40 ]
console.log(indexNumber);   // 3 (posición 3, el 56)


// Exercice: Raffle Winner Verification Program

const winningParticipants = [
    { id: 1, name: 'Aiala', ticketNumber: '031' },
    { id: 2, name: 'Jennifer', ticketNumber: '002' },
    { id: 3, name: 'Ricardo', ticketNumber: '073' },
    { id: 4, name: 'Pablo', ticketNumber: '034' },
    { id: 5, name: 'Cristina', ticketNumber: '105' },
    { id: 6, name: 'Luis', ticketNumber: '046' }
]

function findWinnerByName (name){
    const winner = winningParticipants.find(participants => participants.name === name);
    return winner || 'No winner found with that name.' //En caso de que no hay ganador, devuelve mensaje
}

function findWinnerByTicket(ticketNumber){
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber);
    return index !== -1 ? index : 'No winner found with that ticket number.' //No necesitamos la posición del ganador, solo si lo hay o no. Miramos si el index resultante es distinto a false (-1)
}

// Mostar la info del ganador
function displayWinnerInformation (winner) {
    if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') {
        console.log("Winner information: " , winner);
    } else {
        console.log("No winner found.");
    }
}

const WinnerByName = findWinnerByName('Aiala');
const indexWinnerByTicket = findWinnerByTicket('005');

displayWinnerInformation(WinnerByName); //Winner information:  { id: 6, name: 'Luis', ticketNumber: 38 }
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)  //Index of Winner by Ticket Number:  No winner found with that ticket number.
