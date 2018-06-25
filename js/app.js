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
	ageUp () {
		this.age++;
		return
	};
	reName () {
		this.name = prompt('Please enter a name for your Tomagotchi.');
		return
	};
	feed () {
		console.log("feed")
		console.log(this.hunger)
		if(this.hunger > 1) {
			console.log(`You fed ${this.name}!`)
			this.hunger--;
			$($('.stats')[1]).text(`Hunger: ${this.hunger}`);
			return
		} else if(this.hunger === 1) {
			alert(`${this.name} is full!`);
			return
		}
		return
	};
	sleep () {
		console.log("sleep")
		if(this.sleepiness > 1) {
			console.log(`${this.name} is sleeping!`)
			this.sleepiness--;
			$($('.stats')[2]).text(`Sleepiness: ${this.sleepiness}`);
			return
		} else if(this.sleepiness === 1) {
			alert(`${this.name} isn't tired!`);
			return
		}
		return
	};
	play () {
		console.log("play")
		if(this.boredom > 1) {
			this.boredom--
			$($('.stats')[3]).text(`Boredom: ${this.boredom}`);
			console.log(`You played with ${this.name}!`);
			return
		} else if(this.boredom === 1) {
			alert(`${this.name} doesn't want to play!`);
			return
		}
		return
	}

}









const pet = new Tomagotchi();

$('#feed').on('click', pet.feed);
$('#sleep').on('click', pet.sleep);
$('#play').on('click', pet.play);


const gamePlay = () => {

	const clearId = setInterval( () => {
		const dead = checkForDead();
		pet.ageUp();
		console.log(pet.age);
		if(dead) {
			console.log('Your pet is not aging now!')
			clearInterval(clearId);
		}	
	}, 5000);

	const clearId2 = setInterval( () => {
		pet.hunger++;
		pet.sleepiness++;
		pet.boredom++;
		const dead = checkForDead();
		console.log(pet.hunger, pet.sleepiness, pet.boredom);
		if(dead) {
			console.log('Your pet is dead!');
			clearInterval(clearId2);
		}

	}, 5000)

} 


const checkForDead = () => {
	if(pet.hunger >= 10 || pet.sleepiness >= 10 || pet.boredom >= 10) {
		return true
	} else {
		return false
	};
}


gamePlay();




