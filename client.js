$(document).ready(readyNow);

let numberClicked = 0

function readyNow() {
    $('#generate').on('click', addDiv);
    $('#container').on('click', '.swap', swapColor);
    
}

function addDiv() {
    numberClicked += 1;
    $('#container').html('<div class="content"></div>');
    $('.content').html('<p>' + numberClicked + '</p>');
    $('.content').append('<button class="swap">Swap</button>')
    $('.content').append('<button id="delete">Delete</button>')
}

function swapColor() {
    $(this).parent().toggleClass('swap-color')
}