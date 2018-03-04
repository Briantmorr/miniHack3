class Fighter {
	constructor(fighterName, hp, playerNumber) {
		this.name = fighterName || 'fighter';
		this.hp = hp || 50;
		this.baseDamage = 10;
		this.death = false;
		this.playerNumber = playerNumber || 1;
        this.currentWidth = parseFloat($('.hpInnerPlayer' + this.playerNumber).css('width'));
        this.widthPerHp = this.currentWidth / this.hp;
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
        this.printMessage.call(target,` took ${this.baseDamage} damage from ${this.name}.`);
		this.printMessage(` ${kickOrPunch}s ${target.name}.`);
		target.takeDamage(this.baseDamage);
	}

	takeDamage(damage){
		this.hp -= damage;
		this.turnToAttack = true;
		this.updateHealthBar(damage);
	}
	printMessage(message){
        const $div = $('<div>', {
        	class: 'turn'
        });
        const $name = $('<span>', {
            text: this.name,
            class: 'fighter-name'
        });
        const $msg = $('<span>', {
            text: message,
            class: 'message'
        });
        $div.append($name, $msg);
        $('.battleLog').prepend($div);
    }
    updateHealthBar( attack){
		this.currentWidth -= this.widthPerHp * attack;
         $('.hpInnerPlayer' + this.playerNumber).css('width', this.currentWidth + 'px');
	}
}