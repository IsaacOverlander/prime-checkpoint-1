$(document).ready(readyNow);

let numberClicked = 0;

function readyNow() {
    $('#generate').on('click', addDiv);
    $('#container').on('click', '.swap', swapColor);
    $('#container').on('click', '.delete', deleteDiv);
}

function addDiv() {
    numberClicked += 1;
    console.log(numberClicked);
    
    $('#container').append('<div class="content"><p>' + numberClicked + '</p><br/> <button class="swap">Swap</button> <button class="delete">Delete</button></div>');

}
function swapColor() {
    $(this).parent().toggleClass('swap-color');
    $(this).parent().parent().find('paragraph').toggleClass('swap-color');
}

function deleteDiv() {
    $(this).parent().remove();
}