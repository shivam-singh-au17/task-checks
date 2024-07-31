const compromise = require('compromise');

// Assume we have a voice command transcript
const transcript = 'Find all users in New York';

// Use Compromise to parse the transcript
const doc = compromise(transcript);

// Extract the intent and entities from the transcript
const intent = doc.intents()[0];
const entities = doc.entities();

// Create a database query based on the intent and entities
let query = '';
if (intent === 'find_users') {
    query = `SELECT * FROM users WHERE city = '${entities[0].text}'`;
}

console.log(query); // Output: SELECT * FROM users WHERE city = 'New York'