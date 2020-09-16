// create component parent div
const topAlert = document.createElement('div');

// set component class

// create the sticky btn and modal component
topAlert.innerHTML = `
<a href="https://youtube.com/rampverfinancials">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Learn while watching!</strong>
                <br>
                <small>Subscribe now and watch our latest videos about investing on Youtube!</small>
                <br>

                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </a>
  `;

//append component to host page
document.getElementById('topAlert').appendChild(topAlert);