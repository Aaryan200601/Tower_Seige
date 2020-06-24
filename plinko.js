class Plinko
{
    constructor(x, y)
    {
        var options = {
            density:3
        }
        this.body = Bodies.circle(x, y, 10);
        this.radius = 10;
        World.add(world, this.body)
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        fill("white");
        ellipse(0, 0, this.radius);
        pop();
    }
}