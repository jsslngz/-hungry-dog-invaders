class Food{

  constructor(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.r = 8;
  }

  show(){
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w*2, this.h*2)
    // noStroke();
    // fill(50, 0, 200);
    // ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  move(direction){
    this.y = this.y - 5;
  }

  feeds(dog){
    // var distance = dist(this.x, this.y, dog.x, dog.y)
    return this.x <= dog.x && this.y <= dog.y;
  }

}
