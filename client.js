$(document).ready(readyNow);

let numberClicked = 0

function readyNow() {
    $('#generate').on('click', addDiv);
    
}

function addDiv() {
    numberClicked += 1;
    $('#container').html('<div id="content"></div>');
    $('#content').html('<p>' + numberClicked + '</p>');
}