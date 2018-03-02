$(document).ready(initializeApp)
var firstFight = null;
var player1 = null;
var player2 = null;
function initializeApp(){
    applyClickHandlers();
    player1 = new Fighter('Ryu');
    player2 = new Fighter('Guile');
    firstFight = new Game(player1, player2);
}

function applyClickHandlers(){
 $('.punch.player1').on('click', function(){
     console.log('p1 punch clicked');
     firstFight.playerAttack('punch');

 });
    $('.kick.player1').on('click', function(){
        console.log('p1 kick clicked');
        firstFight.playerAttack('kick');
    });

    $('.punch.player2').on('click', function(){
        console.log('p2 punch clicked');
        firstFight.playerAttack('punch');
    });
    $('.kick.player2').on('click', function(){
        console.log('p2 kick clicked');
        firstFight.playerAttack('kick');
    });
}