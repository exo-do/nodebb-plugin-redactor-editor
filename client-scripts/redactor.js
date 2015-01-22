$(document).ready(function () {

	var config = {
		tabindex: 3,
		allowedTags: ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "p", "a", "ul", "ol", "nl", "li", "b", "img", "i", "strong", "em",
						  "strike", "code", "hr", "br", "div", "table", "thead", "caption", "tbody", "tr", "th", "td", "pre"],
		buttonSource: true,
		convertVideoLinks: false,
		tabKey: true,
		focus: true,
		placeholder: 'Escribe tu comentario...',
		buttons: ["html", "formatting", "bold", "italic", "deleted", "unorderedlist", "orderedlist", "outdent", "indent", "image", "video", "link", "horizontalrule"],
		initCallback: function () {
			$(".redactor_box").addClass("topic");
			$(".redactor_editor").addClass("topic-text");
			$('.action-bar').appendTo('.redactor-toolbar');
		},
		keydownCallback: function (e) {
			if (e.keyCode === 32) {
				this.insert.html('&nbsp;');
				return false;
			}
		},
		plugins: ['imagemanager', 'fontcolor', 'fullscreen']
	};

	return $(window).on("action:composer.loaded", function () {
		return $(".composer").addClass("redactor").find("textarea").attr("name", "composer").redactor(config);
	})
});