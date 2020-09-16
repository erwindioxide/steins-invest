let extensionRemove = window.location.href.split('/').pop().replace('.html', '');
let queryRemove = extensionRemove.split('?')[0];
let hashRemove = queryRemove.split('#')[0];
let key = hashRemove;
const hash_key = "#" + key;
const data_key = "data." + key;
const api = 'https://v2-api.sheety.co/rampverfinancials/mfapi/' + key + "?profilershow=true";


$(document).ready(function () {
	$.getJSON(
		api,
		function (data) {
			var template = Handlebars.compile($('#item-template').html());
			$(hash_key).html(template(eval(data_key)));
		}
	);

	$.ajax("./item-template.hbs").done(function (fundReco) {
		$("body").append(fundReco);
		Handlebars.registerPartial("fundGallery", $("#item-template").html());
	});
});