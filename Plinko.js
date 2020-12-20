class Plinko{
    constructor(x,y,r){
        var options={
        isStatic:true,
        denstiy:1.2,
        friction:1,
        restitution:0
    }
    this.x=x;
    this.y=y;
    this.r=10;
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
    }
    display()
    {
       var plinkoPos=this.body.position;

       push();
       translate(plinkoPos.x,plinkoPos.y);
       fill(255);
       ellipse(this.body,0,0,this.r,this.r);
       pop();
}
}