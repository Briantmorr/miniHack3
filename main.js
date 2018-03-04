$(document).ready(initializeApp)
var firstFight = null;
var player1 = null;
var player2 = null;

function initializeApp(){
    player1 = new Fighter('Ryu', 50, 1);
    player2 = new Fighter('Guile', 50, 2);
    firstFight = new Game(player1, player2);
    applyClickHandlers(); 

}

function applyClickHandlers(){
 $('.punch').on('click', $('button'), function(){
     console.log('punch clicked');
     firstFight.playerAttack('punch');

 });
$('.kick').on('click', $('button'), function(){
    console.log('kick clicked');
    firstFight.playerAttack('kick');
});
}