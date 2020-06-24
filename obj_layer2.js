class Obj2 extends baseClass
{
    constructor(x, y)
    {
        super(x,y,25,25);
        this.visibility = 255;
    }

    display()
    {
        if(this.body.speed < 3){
            super.display();
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
    }
}