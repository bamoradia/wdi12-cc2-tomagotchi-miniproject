console.log('Javascript is linked');

class Tomagotchi {
	constructor(){
		this.name = prompt('Please enter a name for your Tomagotchi.');
		this.age = 0;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.level = 1;
		this.image = '';
	};
	ageUp() {
		this.age++;
	};
	reName() {
		this.name = prompt('Please enter a name for your Tomagotchi.');
	};
	feed () {
		if(this.hunger > 1){
			this.hunger--;
		} else if (this.hunger === 1) {
			alert(`${this.name} is full!`);
		}
	};
	sleep(){
		if(this.sleepiness > 1){
			this.sleepiness--;
		} else if(this.sleepiness === 1) {
			alert(`${this.name} isn't tired!`);
		}
	};
	play(){
		if(this.boredom > 1){
			this.boredom--
		} else if(this.boredom === 1) {
			alert(`${this.name} doesn't want to play!`);
		}
	}

}



const toma = new Tomagotchi;


















