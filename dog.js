const FULL_BELLY = 3; //TODO: make this specific for each tipe of

class Dog{

  constructor(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.w = 55;
    this.h = 36;
    this.belly = 0;
  }

  static get FULL_BELLY(){
    return FULL_BELLY;
  }

  show(){
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w*2, this.h*2)
    // fill(255, 0, 200);
    // ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  move(direction){
    this.x += direction*5;
  }

}
