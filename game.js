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
        }else{
            this.fighterTwo.attack(this.fighterOne, this.attack);
            this.playerTurn = this.fighterTwo;
        }
    }

    playerAttack(kickOrPunch){
        // target.hp -= attacker.move.baseDamage;
        //     checkDead();
        this.attack = kickOrPunch;
        this.changePlayerTurn();
        }
    
    checkDead(target){
        if(target < 0){
            target.death = true;
        }
    }
}

