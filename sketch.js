var dogFeeder;
var food = [];
var dogs = [];
const dogX = 100
var dogPic;
var feederPic;
var cupcakePic;

function setup() {
	dogPic = loadImage('img/black-dog2.png')
	feederPic = loadImage('img/dog-feeder.png')
	cupcakePic = loadImage('img/cupcake.png')
	createCanvas(800, 600);
	dogFeeder = new DogFeeder(feederPic);
	for (var i = 0; i < 5; i++) {
		dogs[i] = new Dog(i * dogX + dogX, 60, dogPic);
	}
}

function draw() {
	background(162, 137, 198);
	dogFeeder.show();
	for (let dog of dogs) {
		dog.show();
	}
	for (let piece of food) {
		piece.show();
		piece.move();
		for (let dog of dogs) {
			if (piece.feeds(dog)){
				console.log("YOU SUCH A GOOD BOY!!! :)");
				food.splice(food.indexOf(piece), 1)
				dog.belly += 1;
				if (dog.belly >= Dog.FULL_BELLY){
					dogs.splice(dogs.indexOf(dog), 1);
				}
			}
		}
	}

	if (keyIsDown(RIGHT_ARROW)){
		dogFeeder.move(1);
	}
	else if (keyIsDown(LEFT_ARROW)) {
		dogFeeder.move(-1);
	}
}

function keyPressed(){
	if (keyCode === 32) {
		food.push(new Food(dogFeeder.x, dogFeeder.y, cupcakePic));
	}
}
