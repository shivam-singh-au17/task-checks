tinymce.init({
    selector: 'textarea',
    plugins: 'lists advlist',
    toolbar: 'mybutton | undo redo | formatselect',

    setup: function (editor) {
        editor.addButton('mybutton', {
            text: 'My Button',
            icon: false,
            onclick: function () {
                editor.insertContent('<span class="customHTML">Custom HTML snippet</span>');
            }
        });
    }
});