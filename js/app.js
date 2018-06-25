console.log('Javascript is linked');

class Tamagotchi { //set up the class Tomagotchi
	constructor(){//make the basics
		this.name = prompt('Please enter a name for your Tomagotchi.');
		this.age = 0;
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.level = 1;
		this.image = '';
	}
	ageUp () {//method to increase the age of the pet
		this.age++;
		return
	}
	reName () {//ability to rename the pet
		this.name = prompt('Please enter a new name for your Tomagotchi.');
		return
	}
	feed () {//decreases the hunger of the pet and updates the HTML
		if(this.hunger > 1) {//only decrease hunger if greater than 1
			//alert(`You fed ${this.name}!`)
			this.hunger--;
			$($('.stats')[1]).text(`Hunger: ${this.hunger}`);
			return
		} else if(this.hunger === 1) { //let the user know pet cannot eat anymore
			alert(`${this.name} is full!`);
			return
		}
		return
	}
	sleep () {//decreases the sleepiness of the pet and updates the HTML
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
	}
	play () {//decreases the boredome of the pet and updates the HTML
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









const pet = new Tamagotchi(); //create a new object from the Tomagotchi class

$('#feed').on('click', (event) => {
	pet.feed(); //makes an event listener on the feed button
});
$('#sleep').on('click', (event) => {
	pet.sleep(); //makes an event listener on the sleep button 
});
$('#play').on('click', (event) => {
	pet.play();
}); //makes an event listener on the play button
$('#rename').on('click', (event) => {
	pet.reName();
	$('#name').text(pet.name)
}); //makes an event listener on the rename button







const gamePlay = () => { //creates the game play function

	$('#name').text(pet.name)

	const clearId = setInterval( () => { //create an interval timer that increases the age of the pet
		const dead = checkForDead();
		pet.ageUp();
		$($('.stats')[0]).text(`Age: ${pet.age}`);
		if(pet.age === 1){
			$('img').attr('src', 'images/baby_tazmanian_devil.png');
		} else if (pet.age === 5){
			$('img').attr('src', 'images/tasmanian_devil.gif');
		}
		//console.log(pet.age);
		if(dead) {
			console.log(`${pet.name} is not aging anymore!`)
			clearInterval(clearId);
		}	
	}, 5000);

	const clearId2 = setInterval( () => { //create an interval timer that increases the other stats of the pet
		pet.hunger++;
		$($('.stats')[1]).text(`Hunger: ${pet.hunger}`);

		pet.sleepiness++;
		$($('.stats')[2]).text(`Sleepiness: ${pet.sleepiness}`);

		pet.boredom++;
		$($('.stats')[3]).text(`Boredom: ${pet.boredom}`);

		const dead = checkForDead();
		//console.log(pet.hunger, pet.sleepiness, pet.boredom);
		if(dead) {
			console.log(`${pet.name} is dead!`);
			clearInterval(clearId2);
			$('img').attr('src', 'images/RIP.png');
		}

	}, 5000)

} 


const checkForDead = () => { //checks if the pet has died
	if(pet.hunger >= 10 || pet.sleepiness >= 10 || pet.boredom >= 10) {
		return true
	} else {
		return false
	};
}


gamePlay(); //run the game




