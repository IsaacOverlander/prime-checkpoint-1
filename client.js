$(document).ready(readyNow);

function readyNow() {
    $('#generate').on('click', addDiv);
    
}

function addDiv() {
    $('#container').append('<div id="content"></div>');
}