// Create a new SpeechRecognition object
const recognition = new webkitSpeechRecognition();

// Set the language and other options
recognition.lang = 'en-US';
recognition.maxResults = 10;
recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    console.log(`You said: ${transcript}`);
};

// Start the speech recognition process
recognition.start();