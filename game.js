class Game {
    constructor(p1, p2){
        this.fighterOne = p1 || 'Jessica';
        this.fighterTwo = p2 || 'Jennifer';
        this.playerTurn = true;
    }

    //push attack messages to the attack log
    postMessages(message){
        
    }

    //check which player it is by checking if true or false
    changePlayerTurn(){
        if(this.playerTurn === true){
            p1.target.attack
        }else{
            p2.target.attack
        }
    }

    playerAttack(attacker, target, move){
        target.hp -= attacker.move.baseDamage;
            checkDead();
        }
    
    checkDead(target){
        if(target < 0){
            target.death = true;
            target.printMessage(this.target + "has lost!")
        } 
    }
}

