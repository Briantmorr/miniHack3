class Figher {
	constructor(fighterName, hp) {
		this.name = fighterName || 'fighter';
		this.hp = hp || 100;
		this.baseDamage = 10;
		this.death = false;
		this.turnToAttack = false;
	}

	attack(target){
		console.log(`${this.name} attacks ${target.name}.`);
	}

	takeDamage(target){
		target.hp -= 10;
		target.turnToAttack = true;
		console.log(`${this.name} took ${this.baseDamage} damage from ${target.name}.`);
	}
	printMessage(message){
        const $div = $('<div>');
        const $name = $('<span>', {
            text: this.name + ": ",
            class: 'truck-name'
        });
        const $msg = $('<span>', {
            text: message,
            class: 'message'
        });
        $div.append($name, $msg);
        $('#root').append($div);
    }
}