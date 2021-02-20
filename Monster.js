// class Monster{

//     constructor(x, y, r){

//         var options = {

//             frictionAir:0.005,
//             density:2

//         }

//         this.r = r;
//         this.image = loadImage("images/Monster-01.png");
//         this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        

//         World.add(world, this.body);

//     }
//     display(){

//         var pos = this.body.position;
//         var angle = this.body.angle;

//         push();
//         translate(pos.x, pos.y);
//         imageMode(CENTER);
//         image(this.image, 0, 0,this.radius*2, this.radius*2);
//         rotate(angle);
//         pop();

//     }

// }

class Monster {
    constructor(x,y,r) {
      var options = {
        'restitution':0.5,
        'friction':0.3,
        'density':0.1,
        isStatic:false
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("images/Monster-01.png");
      World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
      pop();
    }
  }
  