// parse url for data

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
let api = 'https://v2-api.sheety.co/rampverfinancials/campaignsDb/mfCampaigns/' + id;

// assign api data to HTML IDs
function dataFill(json) {
	document.getElementById('imageTarget').setAttribute('src', json.mfCampaign.imageurl);
	document.getElementById('titleTarget').innerHTML = json.mfCampaign.campaignTitle;
	document.getElementById('firstBlockTarget').innerHTML = json.mfCampaign.firstBlock;
	document.getElementById('secondBlockTarget').innerHTML = json.mfCampaign.secondBlock;
	document.getElementById('thirdBlockTarget').innerHTML = json.mfCampaign.thirdBlock;
	document.getElementById('formTarget').setAttribute('action', json.mfCampaign.formLink);
	document.getElementById('campaignTitleEntry').value = json.mfCampaign.campaignTitle;
	document.getElementById('promotedFund').value = json.mfCampaign.promotedFund;
	document.getElementById('otherTags').value = json.mfCampaign.otherTags;
	document.getElementById('_wpcf7').value = json.mfCampaign.wpcf7;
	document.getElementById('_wpcf7_unit_tag').value = json.mfCampaign.wpcf7UnitTag;
	document.getElementById('_wpcf7_version').value = json.mfCampaign.wpcf7Version;
}

// fill data
let output = fetch(api)
	.then(response => response.json())
	.then(json => {
		this.dataFill(json);
	});