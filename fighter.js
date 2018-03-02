class Fighter {
	constructor(fighterName, hp) {
		this.name = fighterName || 'fighter';
		this.hp = hp || 100;
		this.baseDamage = 10;
		this.death = false;
	}

	attack(target, kickOrPunch){
		if(target === player1){
			if(kickOrPunch === 'punch'){
				player2.baseDamage = 7;
			}else{
				player2.baseDamage = 9;
			}
		}else if(target === player2){
			if(kickOrPunch === 'punch'){
				player1.baseDamage = 7;
			}else{
				player1.baseDamage = 9;
			}
		}
        this.printMessage(` took ${this.baseDamage} damage from ${target.name}.`);
			this.printMessage(` ${kickOrPunch}s ${target.name}.`);
			target.takeDamage(this);
	}



	takeDamage(target){
		target.hp -= this.baseDamage;
		target.turnToAttack = true;
	}
	printMessage(message){
        const $div = $('<div>');
        const $name = $('<span>', {
            text: this.name + ": ",
            class: 'fighter-name'
        });
        const $msg = $('<span>', {
            text: message,
            class: 'message'
        });
        $div.append($name, $msg);
        $('.battleLog').prepend($div);
    }
}