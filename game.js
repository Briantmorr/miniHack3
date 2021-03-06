class Game {
    constructor(p1, p2){
        this.fighterOne = p1 || 'Jessica';
        this.fighterTwo = p2 || 'Jennifer';
        this.playerTurn = p1;
        this.attack = 'someAttack';
    }

    //check which player it is by checking if true or false
    changePlayerTurn(){
        if(this.playerTurn === this.fighterOne){
            this.fighterOne.attack(this.fighterTwo, this.attack);
            this.playerTurn = this.fighterTwo;
            this.checkDead(this.fighterTwo);
            $('.player1 .punch, .player1 .kick').prop('disabled', true).addClass('disabled').removeClass('buttonHover');
            $('.player2 .punch, .player2 .kick').prop('disabled', false).addClass('buttonHover').removeClass('disabled');
        }else{
            this.fighterTwo.attack(this.fighterOne, this.attack);
            this.playerTurn = this.fighterOne;
            this.checkDead(this.fighterTwo);
            $('.player2 .punch, .player2 .kick').prop('disabled', true).addClass('disabled').removeClass('buttonHover');
            $('.player1 .punch, .player1 .kick').prop('disabled', false).addClass('buttonHover').removeClass('disabled');            
        }
    }

    playerAttack(kickOrPunch){
        this.attack = kickOrPunch; 
        this.changePlayerTurn();
        }
    
    checkDead(target){
            if( target.hp <= 0 ){
            target.death = true;
            target.printMessage(`${target.name} concedes.`);
            $('body').addClass('won');
            $('.msg').html(target.name + ' concedes.' + '<br>' + ' GAME OVER!!!');
        }
    }
}
