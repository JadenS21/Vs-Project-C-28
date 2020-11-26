class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.boy = loadImage('sprites/boy.png');
        this.pointB = pointB
        this.boy = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    attach(body){
        this.boy.bodyA = body
    }
    
    fly(){
        this.boy.bodyA = null;
    }

    display(){
        image(this.boy,200,20);
        if(this.boy.bodyA){
            var pointA = this.boy.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            
            pop();
        }
    }
    
}