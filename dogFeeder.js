class DogFeeder{

  constructor(){
    this.x = width/2;
  }

  show(){
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, 20, 60);
  }

  move(direction){
    this.x += direction*5;
  }
}
