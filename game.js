class Game {
    constructor(p1, p2){
        this.fighterOne = p1 || 'Jessica';
        this.fighterTwo = p2 || 'Jennifer';
        this.playerTurn = true;
    }

    //push attack messages to the attack log
    // postMessages(message){
        
    // }

    //check which player it is by checking if true or false
    changePlayerTurn(){
        if(this.playerTurn === true){
            this.fighterOne.target.attack;
            this.playerTurn = false;
        }else{
            this.fighterTwo.target.attack
            this.playerTurn = true;
        }
    }

    playerAttack(attacker, target, move){
        target.hp -= attacker.move.baseDamage;
            checkDead();
        }
    
    checkDead(target){
        if(target < 0){
            target.death = true;
        }
    }
}

