class Game {
    constructor(p1, p2){
        this.fighterOne = p1 || 'Jessica';
        this.fighterTwo = p2 || 'Jennifer';
    }

    postMessages(message){

    }

    changePlayerTurn(){

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

