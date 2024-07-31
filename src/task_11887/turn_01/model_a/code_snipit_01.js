// Check for browser support
if ('webkitSpeechRecognition' in window) {
    // Initialize webkitSpeechRecognition
    let recognition = new webkitSpeechRecognition();

    // This will control whether continuous results are captured or not
    recognition.continuous = true;
    recognition.interimResults = true;

    // Set the language to English (you can change this as required)
    recognition.lang = 'en-US';

    // Event listener for when the recognition starts
    recognition.onstart = function () {
        console.log('Voice recognition started. Speak now.');
    };

    // Event listener for result
    recognition.onresult = function (event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        console.log('Final transcript:', finalTranscript);
        console.log('Interim transcript:', interimTranscript);
        processVoiceCommand(finalTranscript); // Call function to process the command
    };

    // Event listener for errors
    recognition.onerror = function (event) {
        console.error('Error occurred:', event.error);
    };

    // Event listener for when the recognition ends
    recognition.onend = function () {
        console.log('Voice recognition ended.');
    };

    // Start voice recognition
    recognition.start();

} else {
    console.log('Web Speech API is not supported in this browser.');
}