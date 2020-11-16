class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }
        this.visibility = 225;

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        console.log(this.body.speed);
        if(this.body.speed<3){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            strokeWeight(2);
            fill("pink");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
        }else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility -5;
            tint(255,this.Visibility);
            pop();
        }
        
        

    }
}