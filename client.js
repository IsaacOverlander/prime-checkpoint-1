$(document).ready(readyNow);

let numberClicked = 1;

function readyNow() {
    $('#generate').on('click', addDiv);
    $('#container').on('click', '.swap', swapColor);
    $('#container').on('click', '.delete', deleteDiv);
}

function addDiv() {
    $('#container').append('<div class="content"></div>');
    $('.content').html('<p>' + numberClicked + '</p><br/> <button class="swap">Swap</button> <button class="delete">Delete</button>');
    numberClicked += 1;
}

function swapColor() {
    $(this).parent().toggleClass('swap-color')
}

function deleteDiv() {
    $(this).parent().remove();
}