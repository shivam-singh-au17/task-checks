function promptUserForHTML(editor) {
    var userHTML = prompt("Please enter your HTML:");
    if (userHTML) {
        var sanitizedHTML = sanitizeHTML(userHTML);
        editor.insertContent(sanitizedHTML);
    }
}


function sanitizeHTML(dirtyHTML) {
    return DOMPurify.sanitize(dirtyHTML);
}