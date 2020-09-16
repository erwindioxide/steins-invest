function getUrlVars() {
	let vars = {};
	let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
		m,
		key,
		value
	) {
		vars[key] = value;
	});
	if (vars == {}) {
		window.location.href = './404.html';
	} else {
		return vars;
	}
}

let id = getUrlVars()['id'];
let api = 'https://v2-api.sheety.co/rampverfinancials/campaignsDb/mfebook/' + id;

// assign api data to HTML IDs
function dataFill(json) {
	document.getElementById('imageTarget').setAttribute('src', json.mfebook.imageurl);
	document.getElementById('titleTarget').innerHTML = json.mfebook.campaignTitle;
	document.getElementById('firstBlockTarget').innerHTML = json.mfebook.firstBlock;
	document.getElementById('secondBlockTarget').innerHTML = json.mfebook.secondBlock;
	document.getElementById('thirdBlockTarget').innerHTML = json.mfebook.thirdBlock;
	document.getElementById('formTarget').setAttribute('action', json.mfebook.formLink);
	document.getElementById('campaignTitleEntry').value = json.mfebook.campaignTitle;
	document.getElementById('promotedFund').value = json.mfebook.promotedFund;
	document.getElementById('otherTags').value = json.mfebook.otherTags;
	document.getElementById('_wpcf7').value = json.mfebook.wpcf7;
	document.getElementById('_wpcf7_unit_tag').value = json.mfebook.wpcf7UnitTag;
	document.getElementById('_wpcf7_version').value = json.mfebook.wpcf7Version;
}

// fill data
let output = fetch(api)
	.then(response => response.json())
	.then(json => {
		this.dataFill(json);
	});