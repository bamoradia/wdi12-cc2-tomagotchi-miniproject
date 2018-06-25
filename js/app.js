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

}



const Toma = new Tomagotchi;


















