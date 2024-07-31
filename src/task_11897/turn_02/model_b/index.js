// Include the DOMPurify library
const DOMPurify = window.DOMPurify;

// Initialize TinyMCE
tinymce.init({
    selector: 'textarea',
    plugins: 'lists advlist',
    toolbar: 'mybutton | undo redo | formatselect',

    setup: function (editor) {
        // Add a custom button
        editor.addButton('mybutton', {
            text: 'Insert Custom HTML',
            icon: false,
            onclick: function () {
                // Prompt the user for their custom HTML
                const customHtml = prompt('Enter your custom HTML:');

                // Sanitize the HTML using DOMPurify
                const sanitizedHtml = DOMPurify.sanitize(customHtml);

                // Insert the sanitized HTML into the editor
                editor.insertContent(sanitizedHtml);
            }
        });
    }
});