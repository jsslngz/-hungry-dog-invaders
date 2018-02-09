var dogFeeder;
var dogs = [];

function setup() {
	createCanvas(600, 400);
	dogFeeder = new DogFeeder();
	for (var i = 0; i < 5; i++) {
		dogs[i] = new Dog(i*100+100, 60);
	}
}

function draw() {
	background(51);
	dogFeeder.show();
	for (let dog of dogs) {
		dog.show();
	}
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		dogFeeder.move(1);
	}
	else if (keyCode === LEFT_ARROW) {
		dogFeeder.move(-1);
	}

}
