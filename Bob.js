class Bob
{
    constructor(x, y, radius)
    {
        var options=
        {
            restitution:1.0,
            isStatic:false,
            density:1.2,
            friction:0
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0, this.radius);
        pop();
    }
}