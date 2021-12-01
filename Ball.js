class Ball{
    constructor(x, y, width, height,angle) {
      var options = {
         // 'restitution':0.8,
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     // rectMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      //strokeWeight(4);
     // stroke("green");
     // fill(255);
      ellipse(0,0,this.width,this.height); 
      pop();
    }
    }