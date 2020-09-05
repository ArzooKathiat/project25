class Paper{
    constructor(x,y, radius){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density: 1.2,
            
           
        }
        this.image = loadImage("sprites/paper.png"),
        
        this.body = Bodies.circle(this.x,this.y, this.radius);
      this.x = x;
      this.y = y;
      this.radius = this.radius;
      World.add(world, this.body);
    }

    
}