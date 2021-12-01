class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        //this.sling1 = loadImage('sprites/sling1.png');
        //this.sling2 = loadImage('sprites/sling2.png');
       // this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
       // image(this.sling1,200,20);
      //  image(this.sling2,170,20);
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           strokeWeight(3);
           line(pointB.x,pointB.y,pointA.x,pointA.y);
            
            pop();
        }
    }
    
}