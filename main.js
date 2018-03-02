$(document).ready(initializeApp)

function initializeApp(){
    applyClickHandlers();
}

function applyClickHandlers(){
 $('.punch.player1').on('click', function(){
     console.log('p1 punch clicked');
     game.p1.add

 });
    $('.kick.player1').on('click', function(){
        console.log('p1 kick clicked');
    });

    $('.punch.player2').on('click', function(){
        console.log('p2 punch clicked');

    });
    $('.kick.player2').on('click', function(){
        console.log('p2 kick clicked');
    });
}