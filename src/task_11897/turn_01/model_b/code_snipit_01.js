tinymce.PluginManager.add('customhtml', function (editor) {
    editor.addButton('customhtml', {
        text: 'Insert Custom HTML',
        icon: 'code',
        onclick: function () {
            editor.insertContent('<p>This is a custom HTML snippet!</p>');
        }
    });
});