class Game {
    constructor(p1, p2){
        this.fighterOne = p1 || 'Jessica';
        this.fighterTwo = p2 || 'Jennifer';
        this.playerTurn = p1;
        this.attack = 'someAttack';
    }

    //push attack messages to the attack log
    // postMessages(message){
        
    // }

    //check which player it is by checking if true or false
    changePlayerTurn(){
        if(this.playerTurn === this.fighterOne){
            this.fighterOne.attack(this.fighterTwo, this.attack);
            this.playerTurn = this.fighterTwo;
            $('.player1 .punch, .player1 .kick').prop('disabled', true).addClass('disabled').removeClass('buttonHover');
            $('.player2 .punch, .player2 .kick').prop('disabled', false).addClass('buttonHover').removeClass('disabled');
        }else{
            this.fighterTwo.attack(this.fighterOne);
            this.playerTurn = this.fighterOne;
            $('.player2 .punch, .player2 .kick').prop('disabled', true).addClass('disabled').removeClass('buttonHover');
            $('.player1 .punch, .player1 .kick').prop('disabled', false).addClass('buttonHover').removeClass('disabled');            
        }
    }

    playerAttack(kickOrPunch){
        // target.hp -= attacker.move.baseDamage;
        //     checkDead();
        this.attack = kickOrPunch;
        this.checkDead(this.playerTurn);
        this.changePlayerTurn();
        }
    
    checkDead(target){
        if(target.hp <= 0){
            target.death = true;
            target.printMessage(target.name + " concedes");
        } else {
            return 'Nobody dies';
        }
    }
}

