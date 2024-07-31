const nlp = require('compromise');

function processVoiceCommand(text) {
    let doc = nlp(text);

    // Simple example: looking for commands like 'find all X'
    let nouns = doc.nouns().out('array');
    if (nouns.length > 0) {
        let query = `SELECT * FROM ${nouns[0]};`;
        executeDatabaseQuery(query);
    } else {
        console.log('Unable to understand the command');
    }
}