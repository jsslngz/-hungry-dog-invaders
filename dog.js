class Dog{

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  show(){
    fill(255, 0, 200);
    ellipse(this.x, this.y, 60, 60);
  }

  move(direction){
    this.x += direction*5;
  }

}
