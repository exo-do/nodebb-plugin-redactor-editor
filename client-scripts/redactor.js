$(document).ready(function () {
	return $(window).on("action:composer.loaded", function () {
		return $(".composer textarea").attr("name", "composer").redactor({
			tabindex: 3,
			allowedTags: ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "p", "a", "ul", "ol", "nl", "li", "b", "img", "i", "strong", "em", 
						  "strike", "code", "hr", "br", "div", "table", "thead", "caption", "tbody", "tr", "th", "td", "pre", "iframe", "video", "source"],
			buttonSource: true,
			convertVideoLinks: !0,
			buttons: ["html", "formatting", "bold", "italic", "deleted", "unorderedlist", "orderedlist", "outdent", "indent", "image", "video", "link", "horizontalrule"],
			initCallback: function () {
				return $(".redactor_box").addClass("topic"), $(".redactor_editor").addClass("topic-text"), $(".composer").addClass("redactor")
			}
		})
	})
});