console.log('Javascript is linked');


let sleepCondition = false;
let time = 0;


class Tamagotchi { //set up the class Tomagotchi
	constructor(){//make the basics
		this.name = prompt('Please enter a name for your Tomagotchi.');
		this.age = 0;
		this.health = 10
		this.energy = 10;
		this.interest = 10;
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
		if(this.health < 10) {//only decrease hunger if greater than 1
			//alert(`You fed ${this.name}!`)
			this.health++;
			const width = this.health * 10
			//$($('.stats')[1]).text(`Health: ${this.health}`);
			$('.health_meter').css('width', width);
			return
		} else if(this.health === 10) { //let the user know pet cannot eat anymore
			alert(`${this.name} is full!`);
			return
		}
		return
	}
	sleep () {//decreases the sleepiness of the pet and updates the HTML
		if(this.energy < 10) {
			//console.log(`${this.name} is sleeping!`)
			this.energy++;
			const width = this.energy * 10
			//$($('.stats')[2]).text(`Energy: ${this.energy}`);
			$('.energy_meter').css('width', width);
			return
		} else if(this.energy === 10) {
			return
		}
		return
	}
	play () {//decreases the boredome of the pet and updates the HTML
		if(this.interest < 10) {
			this.interest++;
			const width = this.interest * 10
			//$($('.stats')[3]).text(`Interest: ${this.interest}`);
			$('.interest_meter').css('width', width);
			//console.log(`You played with ${this.name}!`);
			return
		} else if(this.interest === 10) {
			alert(`${this.name} doesn't want to play!`);
			return
		}
		return
	}
};



const pet = new Tamagotchi(); //create a new object from the Tomagotchi class

$('#feed').on('click', (event) => {
	pet.feed(); //makes an event listener on the feed button
});
$('#sleep').on('click', (event) => {//makes an event listener on the sleep button 
	if(sleepCondition === false){
		$('#feed').prop('disabled', true);
		$('#feed').addClass('disabled');
		$('#feed').removeClass('enabled');
		$('#play').prop('disabled', true);
		$('#play').addClass('disabled');
		$('#play').removeClass('enabled');
		sleepCondition = true;
		//$('#feed').css('opacity', .5);
	} else if(sleepCondition === true){
		$('#feed').prop('disabled', false);
		$('#feed').addClass('enabled');
		$('#feed').removeClass('disabled');
		$('#play').prop('disabled', false);
		$('#play').addClass('enabled');
		$('#play').removeClass('disabled');
		sleepCondition = false;
	}
});
$('#play').on('click', (event) => {
	pet.play();
}); //makes an event listener on the play button
$('#rename').on('click', (event) => {
	pet.reName();
	$('#name').text(pet.name)
}); //makes an event listener on the rename button
$('#restart').on('click', (event) => {
	location.reload();
}); //makes an event listener on the restart button






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

		if(sleepCondition === true){

			pet.health--;
			//$($('.stats')[1]).text(`Health: ${pet.health}`);
			$('.health_meter').css('width', pet.health*10);

			pet.sleep();

			pet.interest--;
			//$($('.stats')[3]).text(`Interest: ${pet.interest}`);
			$('.interest_meter').css('width', pet.interest*10);
		} else if(sleepCondition === false) {

			pet.health--;
			//$($('.stats')[1]).text(`Health: ${pet.health}`);
			$('.health_meter').css('width', pet.health*10);

			pet.energy--;
			//$($('.stats')[2]).text(`Energy: ${pet.energy}`);
			$('.energy_meter').css('width', pet.energy*10);

			pet.interest--;
			//$($('.stats')[3]).text(`Interest: ${pet.interest}`);
			$('.interest_meter').css('width', pet.interest*10);
		}

			const dead = checkForDead();
			//console.log(pet.hunger, pet.sleepiness, pet.boredom);
			if(dead) {
				console.log(`${pet.name} is dead!`);
				clearInterval(clearId2);
				$('img').attr('src', 'images/RIP.png');
			}
	}, 5000);

} ;


const checkForDead = () => { //checks if the pet has died
	if(pet.health <= 0 || pet.energy <= 0 || pet.interest <= 0) {
		$('#feed').off('click');
		$('#sleep').off('click');
		$('#play').off('click');
		$('#rename').off('click');
		return true
	} else {
		return false
	};
};


gamePlay(); //run the game




