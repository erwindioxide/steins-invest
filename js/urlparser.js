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

let code = getUrlVars()['fundmanagercode'].toLowerCase();
let codeBig = getUrlVars()['fundmanagercode'];
let id = getUrlVars()['fid'];
// concat api selector
let api = String('https://api.steinhq.com/v1/storages/5f5ed08d5d3cdc44fcd7d483/' + code + '?search={"fid":"' + id + '"}')

// assign api data to HTML IDs
function dataFill(json) {
  document.querySelector('meta[property="og:title"]').setAttribute('content', document.title);
  document.querySelector('meta[name="description"]').setAttribute('content', json[0].description);
  document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
  document.title = json[0].fundname + ' | Fund Details';
  document.getElementById('fundtitle').innerHTML = json[0].fundname;
  document.getElementById('imageurl').src = json[0].imageurl
  document.getElementById('fundQR').src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=256141&data=https://invest.rampver.com/fund-details.html?fundmanagercode=' + codeBig + '%26fid=' + id;
  document.getElementById('downloadQR').href = 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&color=256141&data=https://invest.rampver.com/fund-details.html?fundmanagercode=' + codeBig + '%26fid=' + id;
  document.getElementById('QRName').innerHTML = json[0].fundname;
  document.getElementById('downloadQR').download = json[0].fundname;
  document.getElementById('imageurl').setAttribute('data-src', json[0].imageurl);
  document.getElementById('navps').innerHTML = json[0].navps;
  document.getElementById('ytdtop').innerHTML = json[0].ytd;
  document.getElementById('introduction').innerHTML = json[0].introduction;
  document.getElementById('description').innerHTML = json[0].description;
  document.getElementById('ffy1').innerHTML = json[0].ffy1;
  document.getElementById('ffy2').innerHTML = json[0].ffy2;
  document.getElementById('ffy3').innerHTML = json[0].ffy3;
  document.getElementById('type').innerHTML = json[0].type;
  document.getElementById('fundmanagername').innerHTML = json[0].fundmanagername;
  document.getElementById('ytd').innerHTML = json[0].ytd;
  document.getElementById('riskprofile').innerHTML = json[0].riskprofile;
  document.getElementById('currency').innerHTML = json[0].currency;
  document.getElementById('initial').innerHTML = json[0].initial;
  document.getElementById('additional').innerHTML = json[0].additional;
  document.getElementById('timehorizon').innerHTML = json[0].timehorizon;
  document.getElementById('inception').innerHTML = json[0].inception;
  document.getElementById('managementfee').innerHTML = json[0].managementfee;
  document.getElementById('salesload').innerHTML = json[0].salesload;
  document.getElementById('holdingperiod').innerHTML = json[0].holdingperiod;
  document.getElementById('exitfee').innerHTML = json[0].exitfee;
  document.getElementById('prospectuslink').href = json[0].prospectuslink;
  document.getElementById('ffslink').href = json[0].ffslink;
  // document.getElementById('profilelink').href = code + '.html#profilelink';
  document.getElementById('forms').href = "https://rampver.com/forms";
  document.getElementById('fundnamevalue').value = json[0].fundname;
  document.getElementById('prospectus').value = json[0].prospectuslink;
  document.getElementById('ffs').value = json[0].ffslink;
  document.getElementById('initialamt').value = json[0].initial;
  document.getElementById('additionalamt').value = json[0].additional;
  document.getElementById('urlGet').value = document.referrer;
  document.getElementById('imgGet').value = json[0].imageurl;
  document.getElementById('suitability').value = json[0].riskprofile;
  document.getElementById('intro_email').value = json[0].introduction;
  document.getElementById('reason1').value = json[0].ffy1;
  document.getElementById('reason2').value = json[0].ffy2;
  document.getElementById('reason3').value = json[0].ffy3;
  document.getElementById('fundnamesoa').innerHTML = json[0].fundname;
  document.getElementById('soafundname').value = json[0].fundname;
  document.getElementById('guidelines').value = json[0].gyidelinespdf;

  // Highstocks
  let chart = Highcharts.stockChart('navChart', {
    navigator: {
      enabled: false,
    },
    data: {
      googleSpreadsheetKey: '1ymjfcHNL645si4rWH5wlLg0oKVPKH7M4IxUwiPTDDQU',
      googleSpreadsheetWorksheet: json[0].navchart,
    },
    plotOptions: {
      line: {
        color: '#256141'
      }
    },
    title: {
      text: 'Fund NAVPS History',
      style: {
        color: '#256141',
      },
    },
    xAxis: {
      ordinal: true,
      type: 'datetime',
      max: +new Date(),
      ceiling: +new Date(),
      events: {
        setExtremes: +new Date(),
        afterSetExtremes: +new Date(),
      },
    },
    rangeSelector: {
      buttons: [{
          type: 'year',
          count: 3,
          text: '3y',
        },
        {
          type: 'year',
          count: 5,
          text: '5y',
        },
        {
          type: 'year',
          count: 1,
          text: 'YOY',
        },
        {
          type: 'ytd',
          text: 'YTD',
          max: +new Date(),
          ceiling: +new Date(),
        },
        {
          type: 'all',
          text: 'All',
        },
      ],
      selected: 3,
      inputPosition: {
        align: 'left',
        x: 0,
        y: 0,
      },
      buttonPosition: {
        align: 'right',
        x: 0,
        y: 0,
      },
    },
  });
  // Highstocks

  // HighChart
  // Make monochrome colors
  var pieColors = (function () {
    var colors = [],
      base = '#30c191';

    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  }());
  // Build the chart
  Highcharts.chart('assetAllocation', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Sample Fund Allocation',
      style: {
        color: '#256141',
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: false,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        },
        showInLegend: true,
        allowPointSelect: false,
        point: {
          events: {
            legendItemClick: function (e) {
              e.preventDefault();
            }
          }
        }
      }
    },
    data: {
      googleSpreadsheetKey: '1RqnsW6uBsF6_hsWGNuSQsPPcXB-GAYSnH8eDmTN7XXw',
      googleSpreadsheetWorksheet: json[0].navchart,
      sliced: true
    },
  });
  // HighChart
}

// fill data
let output = fetch(api)
  .then((response) => response.json())
  .then((json) => {
    this.dataFill(json);
  });