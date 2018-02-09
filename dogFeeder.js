class DogFeeder{

  constructor(img){
    this.x = width/2;
    this.y = height-20
    this.w = 188;
    this.h = 124;
    this.img = img;
  }

  show(){
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h)
    // fill(255);
    // rectMode(CENTER);
    // rect(this.x, this.y, 20, 60);
  }

  move(direction){
    this.x += direction*5;
  }
}
