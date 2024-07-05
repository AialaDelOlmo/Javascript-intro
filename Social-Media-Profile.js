// 1. User information
const username = 'codingAdventurer';
const fullName = 'Jhon Doe';
const age = 25;
const isStudent = true;

// 2. Adderss
const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54321
}

// 3. Hobbies
const hobbies = ['Coding', 'Reading', 'Gaming'];

// 4. Generating personalized bio
const personalizedBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!`

console.log(personalizedBio);