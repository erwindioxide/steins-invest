// create component parent div
const startSeedbox = document.createElement('div');

// create the sticky btn and modal component
startSeedbox.innerHTML = `
<a href="https://rampver.com/seedbox" id="sticky" class="btn rfbtn text-white mt-3 btn-lg" style="z-index: 5;" target="_blank">
Start Investing!
</a>
  `;

//append component to host page
document.getElementById('startSeedbox').appendChild(startSeedbox);