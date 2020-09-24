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
let api = String('https://api.steinhq.com/v1/storages/5f6c08c75d3cdc44fcd7d504/mfebook?search={"id":"' + id + '"}')

// assign api data to HTML IDs
function dataFill(json) {
	document.getElementById('imageTarget').setAttribute('src', json[0].imageurl);
	document.getElementById('titleTarget').innerHTML = json[0].campaignTitle;
	document.getElementById('firstBlockTarget').innerHTML = json[0].firstBlock;
	document.getElementById('secondBlockTarget').innerHTML = json[0].secondBlock;
	document.getElementById('thirdBlockTarget').innerHTML = json[0].thirdBlock;
	document.getElementById('formTarget').setAttribute('action', json[0].formLink);
	document.getElementById('campaignTitleEntry').value = json[0].campaignTitle;
	document.getElementById('promotedFund').value = json[0].promotedFund;
	document.getElementById('otherTags').value = json[0].otherTags;
	document.getElementById('_wpcf7').value = json[0].wpcf7;
	document.getElementById('_wpcf7_unit_tag').value = json[0].wpcf7UnitTag;
	document.getElementById('_wpcf7_version').value = json[0].wpcf7Version;
}

// fill data
let output = fetch(api)
	.then(response => response.json())
	.then(json => {
		this.dataFill(json);
	});