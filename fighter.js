class Fighter {
	constructor(fighterName, hp) {
		this.name = fighterName || 'fighter';
		this.hp = hp || 100;
		this.baseDamage = 10;
		this.death = false;
		this.turnToAttack = false;
	}

	attack(target){
		printMessage(`${this.name} attacks ${target.name}.`);
	}

	takeDamage(target){
		target.hp -= 10;
		target.turnToAttack = true;
		printMessage(`${this.name} took ${this.baseDamage} damage from ${target.name}.`);
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
        $('.battleLog').append($div);
    }
}