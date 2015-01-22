$(document).ready(function () {

	var config = {
		tabindex: 3,
		allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'img', 'i', 'strong', 'em',
						  'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'],
		buttonSource: true,
		convertVideoLinks: false,
		tabKey: true,
		focus: true,
		linebreaks: true,
		placeholder: 'Escribe tu comentario...',
		buttons: ['html', 'formatting', 'bold', 'italic', 'deleted', 'unorderedlist', 'orderedlist', 'outdent', 'indent', 'image', 'video', 'link', 'horizontalrule'],
		initCallback: function () {
			this.$box.addClass('topic');
			this.$editor.addClass('topic-text');
			this.$toolbar.append(this.$box.parents('.composer').find('.action-bar'));
		},
		plugins: ['imagemanager', 'fontcolor', 'fullscreen']
	};

	return $(window).on('action:composer.loaded', function () {
		if (window.location.hash.indexOf('oldeditor') === -1) {
			var textarea = $('.composer').addClass('redactor').find('textarea').attr('name', 'composer');
			/* Obtenemos el contenido del textarea para parsearlo por nuestra cuenta, ya que Redactor se come los \n */
			textarea.val(textarea.val().length ? textarea.val().replace(/\n/g, '<br>') : '<p></p>');
			return textarea.redactor(config);
		}
	})
});